import {Component, Input, OnInit} from '@angular/core';
import {DataComponent} from "../../../component/data.component";
import {SubjectPayload} from "../../../../../models/payload/subject.payload";
import {SubjectFilter} from "../../../../../models/filter/subject/subject.filter";
import {FormModel} from "../../../form/models/form/form.model";
import {FormControlModel, FormControlValue} from "../../../form/models/form/form-control.model";
import {SubjectService} from "../../../../../services/http/subject/subject.service";
import {SchoolBaseFilter} from "../../../../../models/filter/base.filter";
import {DepartmentPayload} from "../../../../../models/payload/department.payload";
import {DepartmentService} from "../../../../../services/http/subject/department.service";

@Component({
  selector: 'app-table-list-courses',
  templateUrl: './table-list-courses.component.html',
  styleUrls: ['./table-list-courses.component.css']
})
export class TableListCoursesComponent implements DataComponent<SubjectPayload[]>, OnInit {
  @Input() default = true;
  @Input() data: SubjectPayload[] = [];
  @Input() title: string = 'Subjects';
  filter: SubjectFilter = new SubjectFilter({});
  filterForm: FormModel = SubjectFilterFormModel;

  constructor(private _subjectService: SubjectService, private _departmentService: DepartmentService) {
    this._departmentService.list(SchoolBaseFilter.simple()).subscribe(res => {
      this.filterForm.attribs.controls[1].attribs.values =
        FormControlValue.ofArray(res, (d: DepartmentPayload) => d.department);
    });
  }

  ngOnInit() {
    if (this.default) {
      this.refresh();
    }
  }

  dataFilterAction($event: any) {
    if (this.filter) {
      this.filter.update($event);
      this.refresh();
    }
  }

  refresh = () => {
    this._subjectService.list(this.filter).subscribe(res => this.data = res);
  }
}

const SubjectFilterFormModel = new FormModel({
  controls: [
    new FormControlModel({
      label: $localize`Name`,
      name: "name"
    }),
    new FormControlModel({
      label: $localize`Department`,
      name: "departmentId",
      type: "select",
      values: []
    }),
  ]
});
