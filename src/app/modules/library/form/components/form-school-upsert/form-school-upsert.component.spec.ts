import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormSchoolUpsertComponent} from './form-school-upsert.component';

describe('SchoolAddFormComponent', () => {
  let component: FormSchoolUpsertComponent;
  let fixture: ComponentFixture<FormSchoolUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSchoolUpsertComponent]
    });
    fixture = TestBed.createComponent(FormSchoolUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
