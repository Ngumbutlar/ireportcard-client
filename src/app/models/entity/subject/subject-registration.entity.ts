import {BaseEntity} from "../base/base.entity";

export class SubjectRegistration extends BaseEntity {
  constructor(
    public satId: number,
    public subjectId: number,
  ) {
    super();
  }
}
