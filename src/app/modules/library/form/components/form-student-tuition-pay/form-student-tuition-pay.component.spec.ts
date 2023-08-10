import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentTuitionPayComponent } from './form-student-tuition-pay.component';

describe('FormStudentTuitionPayComponent', () => {
  let component: FormStudentTuitionPayComponent;
  let fixture: ComponentFixture<FormStudentTuitionPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormStudentTuitionPayComponent]
    });
    fixture = TestBed.createComponent(FormStudentTuitionPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
