import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuAcademicApplyComponent} from './stu-academic-apply.component';

describe('StuAcademicApplyComponent', () => {
  let component: StuAcademicApplyComponent;
  let fixture: ComponentFixture<StuAcademicApplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuAcademicApplyComponent]
    });
    fixture = TestBed.createComponent(StuAcademicApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
