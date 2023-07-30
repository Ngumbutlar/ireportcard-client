import {Component, OnInit} from '@angular/core';
import {StudentApplicationTrialService} from "../../../../../services/http/student/student-application-trial.service";
import {DataComponent} from "../../../../library/component/data.component";
import {StudentApplicationTrialPayload} from "../../../../../models/entity/student/student-application-trial.entity";

@Component({
  selector: 'app-stu-applications',
  templateUrl: './stu-applications.component.html',
  styleUrls: ['./stu-applications.component.css']
})
export class StuApplicationsComponent implements OnInit, DataComponent<StudentApplicationTrialPayload[]> {
  data: StudentApplicationTrialPayload[] = [];
  title: string = $localize `Applications`;

  constructor(private satService: StudentApplicationTrialService) {
  }

  ngOnInit() {

  }

}
