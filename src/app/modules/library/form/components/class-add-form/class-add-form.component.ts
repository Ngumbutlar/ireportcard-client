import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClassLevelEntity} from 'src/app/models/entity/class-level/class-level.entity';
import {SubmitForm} from '../form/submit.form';
import {ClassLevelService} from "../../../../../services/http/class-level/class-level.service";
import {SectionService} from "../../../../../services/http/school/section.service";
import {SectionEntity} from "../../../../../models/entity/school/section.entity";
import {SchoolBaseFilter} from "../../../../../models/filter/base.filter";
import {DropdownChangeEvent} from "primeng/dropdown";
import {ClassLevelFilter} from "../../../../../models/filter/class/class-level.filter";
import {ClassLevelType} from "../../../../../models/entity/base/class-level.enum";

@Component({
  selector: 'app-class-add-form',
  templateUrl: './class-add-form.component.html',
  styleUrls: ['./class-add-form.component.css']
})
export class ClassAddFormComponent implements SubmitForm {
  title: string = $localize`Class Level Information`
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
    this._sectionService.listDto(SchoolBaseFilter.simple()).subscribe(res => {
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

  listClassLevels($event: DropdownChangeEvent) {
    this._classLevelService.listDto(new ClassLevelFilter({
      sectionId: $event.value,
      type: ClassLevelType.MAIN
    })).subscribe(res => {
      this.classLevels = res;
    });
  }
}
