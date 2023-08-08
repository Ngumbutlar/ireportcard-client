import {BaseEntity, Id} from "../base/base.entity";

export class AttendanceCheckEntity extends BaseEntity {
  constructor(
    public checkTime: Date,
    public type: string,
    public location: Object,
    public attendanceId: Id
  ) {
    super();
  }

}
