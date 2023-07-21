import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormDepartmentAddComponent} from './form-department-add.component';

describe('FormDepartmentAddComponent', () => {
  let component: FormDepartmentAddComponent;
  let fixture: ComponentFixture<FormDepartmentAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDepartmentAddComponent]
    });
    fixture = TestBed.createComponent(FormDepartmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
