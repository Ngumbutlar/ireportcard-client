import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormUserAddComponent} from './form-user-add.component';

describe('FormUserAddComponent', () => {
  let component: FormUserAddComponent;
  let fixture: ComponentFixture<FormUserAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUserAddComponent]
    });
    fixture = TestBed.createComponent(FormUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
