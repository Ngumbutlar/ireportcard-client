import { Component } from '@angular/core';
import {SubmitForm} from "../form/submit.form";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-student-tuition-pay',
  templateUrl: './form-student-tuition-pay.component.html',
  styleUrls: ['./form-student-tuition-pay.component.css']
})
export class FormStudentTuitionPayComponent implements SubmitForm {
  form: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      amount: [],
      phone: [],
    })
  }
  submit(): void {
  }

}
