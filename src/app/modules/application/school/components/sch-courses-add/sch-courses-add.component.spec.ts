import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchCoursesAddComponent} from './sch-courses-add.component';

describe('SchCoursesAddComponent', () => {
  let component: SchCoursesAddComponent;
  let fixture: ComponentFixture<SchCoursesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchCoursesAddComponent]
    });
    fixture = TestBed.createComponent(SchCoursesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
