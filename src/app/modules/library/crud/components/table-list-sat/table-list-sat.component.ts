import {Component, Input} from '@angular/core';
import {StudentApplicationTrialPayload} from "../../../../../models/entity/student/student-application-trial.entity";
import {StudentApplicationTrialService} from "../../../../../services/http/student/student-application-trial.service";
import {StudentApplicationTrialFilter} from "../../../../../models/filter/student/student-application-trial.filter";
import {AccountId} from "../../../../../services/general/local-storage.service";
import {FormModel} from "../../../form/models/form/form.model";
import {UserService} from "../../../../../services/http/user/user.service";

@Component({
  selector: 'app-table-list-sat',
  templateUrl: './table-list-sat.component.html',
  styleUrls: ['./table-list-sat.component.css']
})
export class TableListSatComponent {
  data: StudentApplicationTrialPayload[] = [];
  @Input()
  title: string = $localize`Applications`;
  filter = new StudentApplicationTrialFilter({
    studentId: AccountId()
  });
  dataFilterForm: FormModel = new FormModel({controls: []});

  constructor(
    private satService: StudentApplicationTrialService,
    private _userService: UserService
  ) {
    this._userService.getByPrincipal().subscribe(res => {
      this.filter = new StudentApplicationTrialFilter({
        studentId: res.account?.id
      });
      this.refresh();
    });
  }

  dataFilterAction($event: any) {
    if (this.filter) {
      this.filter.update($event);
      this.refresh();
    }
  }

  refresh = () => {
    this.satService.list(this.filter).subscribe(res => this.data = res);
  }
}
