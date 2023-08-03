import {Injectable} from '@angular/core';
import {AcademicCyclePayload} from "../../../models/payload/academic-cycle.payload";
import {AppEndpoint} from "../../../app.endpoints";
import {HttpClient} from "@angular/common/http";
import {SchoolBasedAppService} from "../base/school-based.app.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AcademicCycleService extends SchoolBasedAppService<never, AcademicCyclePayload> {

  constructor(private _http: HttpClient) {
    super(_http, AppEndpoint.ACADEMIC_CYCLE)
  }

  launch = (payload: AcademicCyclePayload) => this.post(payload, "/launch");

  currentCycle = (): Observable<AcademicCyclePayload> => this.get<AcademicCyclePayload>("/current-cycle");
}
