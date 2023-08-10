import {Component} from '@angular/core';
import {ClassLevelEntity} from "../../../../../models/entity/class-level/class-level.entity";

@Component({
  selector: 'app-sch-class-view',
  styleUrls: ['./sch-class-view.component.css'],
  template: `
    <div class="surface-section border-round-xl">
      <app-class-add-form [editing]="true" (submitEvent)="classEditAction($event)"></app-class-add-form>
    </div>
  `
})
export class SchClassViewComponent {

  classEditAction($event: ClassLevelEntity) {

  }
}
