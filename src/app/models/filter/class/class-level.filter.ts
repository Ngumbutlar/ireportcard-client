import {SchoolBaseFilter} from "../base.filter";
import {ClassLevelType} from "../../entity/base/class-level.enum";

interface ClassLevelFilterParams {
  schoolId?: number
  organisationId?: number
  sectionId?: number
  name?: string
  type?: ClassLevelType
}

export class ClassLevelFilter extends SchoolBaseFilter {
  constructor(params: ClassLevelFilterParams, fill: boolean = true) {
    super(params, fill);
  }
}
