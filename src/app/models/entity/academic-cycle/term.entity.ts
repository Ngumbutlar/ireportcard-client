import {CycleInfo} from "./year.entity";
import {BaseEntity} from "../base/base.entity";

export class TermEntity extends BaseEntity {
  constructor(
    public name: string,
    public schoolId: number,
    public cycleInfo: CycleInfo
  ) {
    super();
  }
}
