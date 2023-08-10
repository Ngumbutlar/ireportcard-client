import {ClassLevelEntity} from "../entity/class-level/class-level.entity";

export interface ClassLevelPayload {
  classLevel: ClassLevelEntity
  subClassLevels: any[]
}
