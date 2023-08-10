import {Injectable} from '@angular/core';
import {
  StudentApplicationTrialEntity,
  StudentApplicationTrialPayload
} from "../../../models/entity/student/student-application-trial.entity";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";
import {SchoolBasedAppService} from "../base/school-based.app.service";
import {Id} from "../../../models/entity/base/base.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentApplicationTrialService extends
  SchoolBasedAppService<StudentApplicationTrialEntity, StudentApplicationTrialPayload> {

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.STUDENT_APPLICATION_TRIAL);
  }

  getByStudentAndCurrentAcademicYear = (studentId: Id): Observable<StudentApplicationTrialEntity | null> => {
    return this.get(`/student/${studentId}/currentYear`);
  }

  getByPayloadStudentAndCurrentAcademicYear = (studentId: Id): Observable<StudentApplicationTrialPayload> => {
    return this.get(`/student/${studentId}/currentYear/payload`);
  }
}
