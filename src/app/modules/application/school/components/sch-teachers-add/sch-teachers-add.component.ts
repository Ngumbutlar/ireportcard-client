import {Component} from '@angular/core';

@Component({
  selector: 'app-sch-teachers-add',
  styleUrls: ['./sch-teachers-add.component.css'],
  template: `
    <div class="surface-section border-round-xl">
      <app-form-teacher-add (submitEvent)="submit($event)"></app-form-teacher-add>
    </div>
  `
})
export class SchTeachersAddComponent {

  submit = (teacher: any) => {

  }
}
