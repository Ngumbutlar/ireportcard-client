import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {MessageService} from "primeng/api";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private msg: MessageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => this.errorResponseHandler(error))
    );
  }

  private errorResponseHandler = (response?: HttpErrorResponse | null) => {
    if (response != null && response.hasOwnProperty('error') && response.error.hasOwnProperty('message')) {
      const apiError = response.error as ApiError;
      let error = 'Error';
      if (typeof apiError.error === "string") {
        error = apiError.error as string;
      }
      this.msg.add({severity: 'error', summary: error, detail: apiError.message})
    }
    return throwError(() => response)
  }
}

class ApiError {
  constructor(
    public message: string,
    public messageCode: string,
    public path: string,
    public timestamp: string,
    public error: {} | string
  ) {
  }
}
