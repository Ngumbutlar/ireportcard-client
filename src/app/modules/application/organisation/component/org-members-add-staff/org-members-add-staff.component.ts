import {Component} from '@angular/core';
import {Role} from "../../../../../models/entity/base/role.enum";

@Component({
  selector: 'app-org-members-add-staff',
  styleUrls: ['./org-members-add-staff.component.css'],
  template: `
    <section class="section">
      <app-form-user-add [role]="Role.TEACHER" [title]="title"></app-form-user-add>
    </section>
  `
})
export class OrgMembersAddStaffComponent {
  title = `Staff information`;

  protected readonly Role = Role;
}
