import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StuCoursesComponent} from './components/stu-courses/stu-courses.component';
import {StuHomeComponent} from './components/stu-home/stu-home.component';
import {StuApplicationsComponent} from './components/stu-applications/stu-applications.component';
import {LibraryModule} from "../../library/library.module";
import {StuAcademicCycleComponent} from './components/stu-academic-cycle/stu-academic-cycle.component';
import {StuAcademicApplyComponent} from './components/stu-academic-apply/stu-academic-apply.component';
import {StuAcademicPayComponent} from './components/stu-academic-pay/stu-academic-pay.component';


@NgModule({
  declarations: [
    StuCoursesComponent,
    StuHomeComponent,
    StuApplicationsComponent,
    StuAcademicCycleComponent,
    StuAcademicApplyComponent,
    StuAcademicPayComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    LibraryModule,
  ]
})
export class StudentModule {
}
