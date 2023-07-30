import {Component, OnInit} from '@angular/core';
import {FilterComponent} from "../../../../library/component/filter.component";
import {SubjectFilter} from "../../../../../models/filter/subject/subject.filter";
import {FormModel} from "../../../../library/form/models/form/form.model";
import {TableModel} from "../../../../library/crud/models/table.model";
import {SubjectService} from "../../../../../services/http/subject/subject.service";
import {SubjectUtil} from "../../../../../utils/subject.util";
import {DepartmentService} from "../../../../../services/http/subject/department.service";
import {FormControlModel, FormControlValue} from "../../../../library/form/models/form/form-control.model";
import {SchoolBaseFilter} from "../../../../../models/filter/base.filter";
import {DepartmentPayload} from "../../../../../models/payload/department.payload";

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


