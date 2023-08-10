import {Injectable} from '@angular/core';
import {AppService} from "../base/app.service";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";
import {Observable} from "rxjs";
import {ClassLevelPayload} from "../../../models/payload/class-level.payload";
import {ClassLevelFilter} from "../../../models/filter/class/class-level.filter";
import {ClassLevelEntity} from "../../../models/entity/class-level/class-level.entity";

@Injectable({
  providedIn: 'root'
})
export class ClassLevelService extends AppService<ClassLevelEntity, ClassLevelPayload> {

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.CLASS_LEVEL)
  }
}
