import {Component} from '@angular/core';
import {Role} from "../../../../../models/entity/base/role.enum";

@Component({
  selector: 'app-org-members-add-admin',
  styleUrls: ['./org-members-add-admin.component.css'],
  template: `
    <section class="section">
      <app-form-user-add [role]="Role.SCHOOL_ADMIN" [title]="title"></app-form-user-add>
    </section>
  `
})
export class OrgMembersAddAdminComponent {
  title = `Administration Information`;

  protected readonly Role = Role;
}
