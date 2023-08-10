import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../../../../../services/http/subject/subject.service";
import {DepartmentService} from "../../../../../services/http/subject/department.service";

@Component({
  selector: 'app-sch-courses',
  styleUrls: ['./sch-courses.component.css'],
  template: `
    <app-table-list-courses></app-table-list-courses>
  `
})
export class SchCoursesComponent implements OnInit {
  constructor(
    private _subjectService: SubjectService,
    private _departmentService: DepartmentService
  ) {
  }

  ngOnInit(): void {
  }


}


