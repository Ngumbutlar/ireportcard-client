import {YearEntity} from "../entity/academic-cycle/year.entity";
import {TermEntity} from "../entity/academic-cycle/term.entity";

export interface AcademicCyclePayload {
  year: YearEntity
}

export interface CurrentTermPayload {
  currentTerm: TermEntity
  previousTerms: TermEntity[]
}

