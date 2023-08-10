import {BaseEntity} from "../base/base.entity";
import {SubjectRegistration} from "../subject/subject-registration.entity";
import {SubjectEntity} from "../subject/subject.entity";
import {UserAccountEntity} from "../user/user-account.entity";
import {StudentApplicationEntity} from "./student-application.entity";

export class StudentApplicationTrialEntity extends BaseEntity {
  constructor(
    public order: number,
    public repeating: boolean,
    public academicYearId: number
  ) {
    super()
  }
}

export interface StudentApplicationTrialPayload {
  classLevelFullName: string
  registeredSubjects: RegisteredSubject[];
  student: UserAccountEntity
  studentApplication: StudentApplicationEntity;
  studentApplicationTrial: StudentApplicationTrialEntity;
}


interface RegisteredSubject {
  subject: SubjectEntity;
  subjectRegistration: SubjectRegistration;
}
