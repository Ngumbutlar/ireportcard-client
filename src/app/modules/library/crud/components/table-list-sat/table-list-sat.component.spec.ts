import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListSatComponent } from './table-list-sat.component';

describe('TableListSatComponent', () => {
  let component: TableListSatComponent;
  let fixture: ComponentFixture<TableListSatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListSatComponent]
    });
    fixture = TestBed.createComponent(TableListSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
