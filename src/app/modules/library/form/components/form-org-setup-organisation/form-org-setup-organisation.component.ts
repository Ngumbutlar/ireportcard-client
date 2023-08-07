import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {OrganisationPayload} from "../../../../../models/payload/organisation.payload";

@Component({
  selector: 'app-form-org-setup-organisation',
  templateUrl: './form-org-setup-organisation.component.html',
  styleUrls: ['./form-org-setup-organisation.component.css']
})
export class FormOrgSetupOrganisationComponent {
  title = $localize`Organisation Information`;
  adminInfo = $localize`Administrator Information`;
  btnLabel = $localize`Create Organisation`
  form: FormGroup;
  @Output()
  submitEvent: EventEmitter<OrganisationPayload> = new EventEmitter<OrganisationPayload>();
  @Input() loading!: boolean;
  constructor(
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      organisation: this._fb.group({
        name: ['', Validators.required]
      }),
      creator: this._fb.group({
        email: ['', [Validators.required, Validators.email]],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['']
      }),
      password: ['']
    })
  }

  submit = () => {
    this.btnLabel = `Creating...`;
    this.submitEvent.emit({...this.form?.value});
  }
}
