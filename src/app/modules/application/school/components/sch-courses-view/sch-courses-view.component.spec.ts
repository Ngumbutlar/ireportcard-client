import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchCoursesViewComponent} from './sch-courses-view.component';

describe('SchCoursesViewComponent', () => {
  let component: SchCoursesViewComponent;
  let fixture: ComponentFixture<SchCoursesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchCoursesViewComponent]
    });
    fixture = TestBed.createComponent(SchCoursesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
