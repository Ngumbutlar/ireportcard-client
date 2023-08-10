import {Component, Input} from '@angular/core';
import {StudentApplicationTrialEntity} from "../../../../../models/entity/student/student-application-trial.entity";

@Component({
  selector: 'app-stu-academic-pay',
  styleUrls: ['./stu-academic-pay.component.css'],
  template: `
    <div>
      <app-form-student-tuition-pay></app-form-student-tuition-pay>
    </div>
  `
})
export class StuAcademicPayComponent {
  @Input()
  sat?: StudentApplicationTrialEntity;

}
