import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {
  StudentApplicationEntity,
  StudentApplicationPayload
} from "../../../models/entity/student/student-application.entity";
import {AppEndpoint} from "../../../app.endpoints";
import {HttpClient} from "@angular/common/http";
import {SchoolBasedAppService} from "../base/school-based.app.service";
import {StudentApplicationCreateRequest} from "../../../models/entity/student/student-application.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentApplicationService extends SchoolBasedAppService<StudentApplicationEntity, StudentApplicationPayload> {

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.STUDENT_APPLICATION);
  }

  apply = (request: StudentApplicationCreateRequest): Observable<any> => {
    return this.post(request, '/apply');
  }
}
