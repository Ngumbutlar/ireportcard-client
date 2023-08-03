import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AcademicCyclePayload, CurrentTermPayload} from "../../../../../models/payload/academic-cycle.payload";
import {AcademicCycleService} from "../../../../../services/http/academic-cycle/academic-cycle.service";
import {today, todayYear} from "../../../../../utils/date.util";
import {TermService} from "../../../../../services/http/academic-cycle/term.service";
import {TermEntity} from "../../../../../models/entity/academic-cycle/term.entity";
import {SchoolId} from "../../../../../services/general/local-storage.service";

@Component({
  selector: 'app-sch-acad-cycle-term',
  templateUrl: './sch-acad-cycle-term.component.html',
  styleUrls: ['./sch-acad-cycle-term.component.css']
})
export class SchAcadCycleTermComponent {
  form: FormGroup;
  currentTermPayload?: CurrentTermPayload;

  constructor(
    private _fb: FormBuilder,
    private _academicCycleService: AcademicCycleService,
    private _termService: TermService
  ) {
    this.form = this._fb.group({
      startYear: [todayYear(), Validators.required],
      openingDate: [today(), Validators.required],
      closingDate: [],
    });
  }

  submit() {
    const schoolId = SchoolId();
    if (schoolId) {
      const term: TermEntity = {
        name: this.form.get('name')?.value,
        cycleInfo: {
          openingDate: this.form.get('openingDate')?.value,
          closingDate: this.form.get('closingDate')?.value,
        },
        schoolId: schoolId!!
      }
      this._termService.launch(term).subscribe(() => {
        this._termService.currentCycle().subscribe();
      });
    }
  }
}
