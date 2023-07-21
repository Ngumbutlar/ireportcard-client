import {Component} from '@angular/core';
import {ClassLevelEntity} from "../../../../../models/entity/class-level/class-level.entity";
import {ClassLevelService} from "../../../../../services/http/class-level/class-level.service";

@Component({
  selector: 'app-sch-classes-add',
  styleUrls: ['./sch-classes-add.component.css'],
  template: `
    <div class="surface-section border-round-xl">
      <app-class-add-form (submitEvent)="classAddAction($event)"></app-class-add-form>
    </div>
  `
})
export class SchClassesAddComponent {
  constructor(private _classLevelService: ClassLevelService) {
  }

  classAddAction($event: ClassLevelEntity) {
    console.log($event)
  }
}
