import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {
  StudentApplicationTrialEntity,
  StudentApplicationTrialPayload
} from "../../../models/entity/student/student-application-trial.entity";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class StudentApplicationTrialService extends AppService<StudentApplicationTrialEntity, StudentApplicationTrialPayload>{

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.STUDENT_APPLICATION_TRIAL);
  }
}
