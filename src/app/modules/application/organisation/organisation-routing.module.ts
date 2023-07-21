import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrgMembersComponent} from "./component/org-members/org-members.component";
import {OrgMembersAddAdminComponent} from "./component/org-members-add-admin/org-members-add-admin.component";
import {OrgSchoolsComponent} from "./component/org-schools/org-schools.component";
import {OrgSchoolsAddComponent} from "./component/org-schools-add/org-schools-add.component";
import {OrgSchoolsAssignStaffComponent} from "./component/org-schools-assign-staff/org-schools-assign-staff.component";
import {OrgSchoolsViewComponent} from "./component/org-schools-view/org-schools-view.component";
import {OrgDashboardComponent} from "./component/org-dashboard/org-dashboard.component";
import {OrgMembersAddStaffComponent} from "./component/org-members-add-staff/org-members-add-staff.component";

const routes: Routes = [
  {
    path: '',
    component: OrgDashboardComponent
  },
  {
    path: 'members',
    children: [
      {
        path: '',
        component: OrgMembersComponent
      },
      {
        path: 'add-admin',
        component: OrgMembersAddAdminComponent
      },
      {
        path: 'add-staff',
        component: OrgMembersAddStaffComponent
      }
    ]
  },
  {
    path: 'schools',
    children: [
      {
        path: '',
        component: OrgSchoolsComponent
      },
      {
        path: 'view/:id',
        component: OrgSchoolsViewComponent
      },
      {
        path: 'add',
        component: OrgSchoolsAddComponent
      },
      {
        path: 'view',
        component: OrgSchoolsViewComponent
      },
      {
        path: 'assign-admin',
        component: OrgSchoolsAssignStaffComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule {
}
