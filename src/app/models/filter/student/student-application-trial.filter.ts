import {SchoolBaseFilter} from "../base.filter";

interface StudentApplicationTrialFilterParams {
  schoolId?: number
  organisationId?: number
  classLevelId?: number
  academicYearId?: number
  studentId?: number
}

export class StudentApplicationTrialFilter extends SchoolBaseFilter {
  constructor(params: StudentApplicationTrialFilterParams, fill: boolean = true) {
    super(params, fill);
  }
}
