import { Component } from '@angular/core';
import {OrganisationPayload} from "../../../../../models/payload/organisation.payload";

@Component({
  selector: 'app-org-setup-organisation',
  templateUrl: './org-setup-organisation.component.html',
  styleUrls: ['./org-setup-organisation.component.css']
})
export class OrgSetupOrganisationComponent {

  loading: boolean = false
  submit = (org: OrganisationPayload) => {
    // TODO:  implement submit organisation data
    this.loading = true
    console.log(org);
  }
}
