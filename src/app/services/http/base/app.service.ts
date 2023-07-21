import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";
import {Injectable} from "@angular/core";
import {BaseFilter} from "../../../models/filter/base.filter";
import {Observable} from "rxjs";

export interface IAppService<T> {}


@Injectable({
  providedIn: 'root'
})
export abstract class AppService<ENTITY, PAYLOAD> implements IAppService<ENTITY> {
  protected readonly url: string;

  protected constructor(private httpClient: HttpClient, endpoint?: AppEndpoint, pathPrefix: string = '') {
    this.url = `${endpoint?.url ?? ''}${pathPrefix}`;
  }

  urlWithPath = (path: string) => `${this.url}${path}`

  postPayload = (payload: PAYLOAD, path: string = '') => this.httpClient.post<any>(`${this.url}${path}`, payload);
  getPayload = (path: string = '') => this.httpClient.get<PAYLOAD>(`${this.url}${path}`);

  list = (filter: BaseFilter): Observable<PAYLOAD[]> => {
    return this.httpClient.get<PAYLOAD[]>(this.urlWithPath('/list'), {
      params: filter.parameters
    });
  }

  listEntity = (filter: BaseFilter): Observable<ENTITY[]> => {
    return this.httpClient.get<ENTITY[]>(this.urlWithPath('/list-payload'), {
      params: filter.parameters
    });
  }
}
