import {DeletableEntity} from "../base/base.entity";
import {ClassLevelType} from "../base/class-level.enum";

export class ClassLevelEntity extends DeletableEntity {
  constructor(
    public name: string,
    public order: number,
    public parentId: number,
    public sectionId: number,
    public type: ClassLevelType
  ) {
    super();
  }
}
