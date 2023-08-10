import {Component} from '@angular/core';
import {serviceData} from 'src/app/models/entity/data/service.data';
import {AppRoute, AppRoutes} from "../../app.routes";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  serviceData = serviceData;

  protected readonly AppRoute = AppRoute;

  constructor() {
    console.log(AppRoute.AUTH_LOGIN)
  }

}
