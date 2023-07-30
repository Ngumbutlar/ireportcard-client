import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuAcademicPayComponent} from './stu-academic-pay.component';

describe('StuAcademicPayComponent', () => {
  let component: StuAcademicPayComponent;
  let fixture: ComponentFixture<StuAcademicPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuAcademicPayComponent]
    });
    fixture = TestBed.createComponent(StuAcademicPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
