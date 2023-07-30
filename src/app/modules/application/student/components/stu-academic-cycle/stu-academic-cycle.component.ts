import {Component, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {StudentApplicationTrialService} from "../../../../../services/http/student/student-application-trial.service";
import {Id} from "../../../../../models/entity/base/base.entity";
import {Role} from "../../../../../models/entity/base/role.enum";
import {UserAccountEntity} from "../../../../../models/entity/user/user-account.entity";
import {UserService} from "../../../../../services/http/user/user.service";
import {StudentApplicationTrialEntity} from "../../../../../models/entity/student/student-application-trial.entity";
import {SubjectPayload} from "../../../../../models/payload/subject.payload";

@Component({
  selector: 'app-stu-academic-cycle',
  templateUrl: './stu-academic-cycle.component.html',
  styleUrls: ['./stu-academic-cycle.component.css']
})
export class StuAcademicCycleComponent implements OnInit {
  userAccount?: UserAccountEntity;
  studentApplicationTrial?: StudentApplicationTrialEntity;
  hasApplied: boolean = false;
  messages: Message[] = [];
  applyVisible: boolean = false;
  tuitionPayVisible: boolean = false;
  isStudent: boolean = false;
  registeredSubjectsPayload: SubjectPayload[] = [];

  constructor(
    private _userService: UserService,
    private _studentApplicationTrialService: StudentApplicationTrialService,
  ) {
    this.messages = [
      {
        severity: 'warn',
        summary: $localize`Warning`,
        detail: $localize`You have not yet applied for this academic year. Please click the button below to apply and make payment.`
      },
      {
        severity: 'warn',
        summary: $localize`Warning`,
        detail: $localize`You have not yet paid tuition for this academic year. Please click the button below to make payment.`
      }
    ]
  }

  ngOnInit() {
    this._userService.getByPrincipal().subscribe(currentUser => {
      this.isStudent = currentUser.account?.role == Role.STUDENT
      this.userAccount = currentUser.account;
      if (this.isStudent && this.userAccount?.id) {
        this.loadStudentApplicationTrial(this.userAccount?.id);
      }

    });
  }

  showApplyDialog() {
    this.applyVisible = true;
  }

  private loadStudentApplicationTrial(studentId: Id) {
    this._studentApplicationTrialService.getByPayloadStudentAndCurrentAcademicYear(studentId).subscribe(res => {
      if (res != null) {
        this.studentApplicationTrial = res.studentApplicationTrial;
        this.hasApplied = true;
        this.registeredSubjectsPayload = res.registeredSubjects.map(rs => <SubjectPayload>{subject: rs.subject})
      }
    })
  }

  showTuitionPayDialog() {
    this.tuitionPayVisible = true;
  }
}
