import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClassLevelEntity} from 'src/app/models/entity/class-level/class-level.entity';
import {SubmitForm} from '../form/submit.form';
import {ClassLevelService} from "../../../../../services/http/class-level/class-level.service";
import {SectionService} from "../../../../../services/http/school/section.service";
import {ClassLevelFilter} from "../../../../../models/filter/class/class-level.filter";
import {SectionEntity} from "../../../../../models/entity/school/section.entity";
import {SchoolBaseFilter} from "../../../../../models/filter/base.filter";

@Component({
  selector: 'app-class-add-form',
  templateUrl: './class-add-form.component.html',
  styleUrls: ['./class-add-form.component.css']
})
export class ClassAddFormComponent implements SubmitForm {
  title: string = $localize`Class Information`
  form: FormGroup
  @Input()
  editing: boolean = false;
  @Input()
  classLevel?: ClassLevelEntity;

  @Output()
  submitEvent = new EventEmitter<ClassLevelEntity>();
  loading: boolean = false;

  sections: SectionEntity[] = [];
  classLevels: ClassLevelEntity[] = [];


  constructor(
    private _fb: FormBuilder,
    private _sectionService: SectionService,
    private _classLevelService: ClassLevelService,
  ) {
    this.form = this._fb.group({
      name: [this.classLevel?.name ?? '', Validators.required],
      order: [{value: this.classLevel?.order, disabled: this.editing} ?? '', Validators.required],
      sectionId: [{value: this.classLevel?.sectionId, disabled: this.editing}, Validators.required],
      parentId: [{value: this.classLevel?.parentId, disabled: this.editing}],
    });
    // TODO the below must fetch according to changes in section service
    this._classLevelService.listEntity(SchoolBaseFilter.simple()).subscribe(res => {
      this.classLevels = res;
    });
    this._sectionService.listEntity(SchoolBaseFilter.simple()).subscribe(res => {
      this.sections = res;
    })
  }

  get buttonProperty() {
    return this.editing ? {label: 'Add Class', icon: 'pi pi-pencil'} : {label: 'Add Class', icon: 'pi pi-plus'}
  }

  submit(): void {
    this.loading = true
    this.submitEvent.emit(<ClassLevelEntity>{
      ...this.form.value
    });
  }
}
