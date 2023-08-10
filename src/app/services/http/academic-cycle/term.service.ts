import { Injectable } from '@angular/core';
import {SchoolBasedAppService} from "../base/school-based.app.service";
import {TermEntity} from "../../../models/entity/academic-cycle/term.entity";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class TermService extends SchoolBasedAppService<TermEntity, any>{

  constructor(private _http: HttpClient) {
    super(_http, AppEndpoint.TERM)
  }

  launch = (term: TermEntity) => this.post(term, "/launch");

  currentCycle = () => this.get('/current');
}
