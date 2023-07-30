import {Component} from '@angular/core';
import {DepartmentEntity} from 'src/app/models/entity/subject/department.entity';

@Component({
  selector: 'app-sch-departments-add',
  templateUrl: './sch-departments-add.component.html',
  styleUrls: ['./sch-departments-add.component.css']
})
export class SchDepartmentsAddComponent {
  loading: boolean = false;

  submit = (dep: DepartmentEntity) => {
    // Adds department to a school
  }
}
