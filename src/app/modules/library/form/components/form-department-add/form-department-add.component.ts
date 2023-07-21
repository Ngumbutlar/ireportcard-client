import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DepartmentEntity} from 'src/app/models/entity/subject/department.entity';
import {SchoolId} from 'src/app/services/general/local-storage.service';
import {SubmitForm} from '../form/submit.form';

@Component({
  selector: 'app-form-department-add',
  templateUrl: './form-department-add.component.html',
  styleUrls: ['./form-department-add.component.css']
})
export class FormDepartmentAddComponent implements SubmitForm {
  title: string = $localize`Department Information`;
  form: FormGroup
  @Input()
  editing: boolean = false;
  @Input()
  deparment?: DepartmentEntity;
  @Output()
  submitEvent = new EventEmitter<DepartmentEntity>();
  loading: boolean = false;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      name: [this.deparment?.name ?? '', Validators.required],
      hod: [this.deparment?.hodId]
    })
  }

  get buttonProperty() {
    return this.editing ? {label: 'Edit Department', icon: 'pi pi-pencil'} : {
      label: 'Add Department',
      icon: 'pi pi-plus'
    }
  }

  submit(): void {
    this.loading = true
    this.submitEvent.emit(new DepartmentEntity(this.form.value, SchoolId()!))
  }

}
