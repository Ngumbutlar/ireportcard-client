import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuAcademicCycleComponent} from './stu-academic-cycle.component';

describe('StuAcademicCycleComponent', () => {
  let component: StuAcademicCycleComponent;
  let fixture: ComponentFixture<StuAcademicCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuAcademicCycleComponent]
    });
    fixture = TestBed.createComponent(StuAcademicCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
