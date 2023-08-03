import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchAcadCycleTermComponent } from './sch-acad-cycle-term.component';

describe('SchAcadCycleTermComponent', () => {
  let component: SchAcadCycleTermComponent;
  let fixture: ComponentFixture<SchAcadCycleTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchAcadCycleTermComponent]
    });
    fixture = TestBed.createComponent(SchAcadCycleTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
