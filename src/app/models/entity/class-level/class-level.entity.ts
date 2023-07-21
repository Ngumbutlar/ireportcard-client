import {DeletableEntity} from "../base/base.entity";

export class ClassLevelEntity extends DeletableEntity {
  constructor(
    public name: string,
    public order: number,
    public parentId: number,
    public sectionId: number
  ) {
    super();
  }
}
