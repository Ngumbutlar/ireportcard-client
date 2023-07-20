import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentPayload } from 'src/app/models/payload/department.payload';
import { DepartmentService } from 'src/app/services/http/subject/department.service';
import { DEFAULT_ID } from 'src/app/utils/base.util';

@Component({
  selector: 'app-sch-departments-view',
  templateUrl: './sch-departments-view.component.html',
  styleUrls: ['./sch-departments-view.component.css']
})
export class SchDepartmentsViewComponent implements OnInit {
  id?: number;
  department?: DepartmentPayload;
  
  constructor(private _activateRoute: ActivatedRoute,
    private _departmentService: DepartmentService) {
  }

  getId = () => {
    this.id = this._activateRoute.snapshot.params['id']
    
  }

  ngOnInit() {
    this.getId()
    if (this.id) {
      this._departmentService.getPayload(`/one/${this.id}`).subscribe(res => this.department = res)
    }
  }

}
