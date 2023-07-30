import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableListCoursesComponent} from './table-list-courses.component';

describe('TableListCoursesComponent', () => {
  let component: TableListCoursesComponent;
  let fixture: ComponentFixture<TableListCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListCoursesComponent]
    });
    fixture = TestBed.createComponent(TableListCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
