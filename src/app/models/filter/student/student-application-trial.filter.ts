import {SchoolBaseFilter} from "../base.filter";
import {Id} from "../../entity/base/base.entity";

interface StudentApplicationTrialFilterParams {
  schoolId?: number
  organisationId?: number
  classLevelId?: number
  academicYearId?: number
  studentId?: Id
}

export class StudentApplicationTrialFilter extends SchoolBaseFilter {
  constructor(params: StudentApplicationTrialFilterParams, fill: boolean = true) {
    super(params, fill);
  }
}
