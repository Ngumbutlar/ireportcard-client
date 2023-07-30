import {BaseEntity} from "../base/base.entity";
import {ClassLevelEntity} from "../class-level/class-level.entity";
import {UserAccountEntity} from "../user/user-account.entity";

export class StudentApplicationEntity extends BaseEntity {
  constructor(
    public classLevel: ClassLevelEntity,
    public student: UserAccountEntity,
    public studentApplicationTrials: any[]
  ) {
    super()
  }
}

export interface StudentApplicationPayload {

}
