import {AuthenticationService} from "../services/http/authentication/authentication.service";
import {Type} from "@angular/core";
import {AppService} from "../services/http/base/app.service";
import {MessageService} from "primeng/api";

type HttpAppServiceInjectable = { provide: Type<AppService<any, any>>, useClass: Type<AppService<any, any>> }[]

const authenticationServiceInjectables: HttpAppServiceInjectable = [
  {provide: AuthenticationService, useClass: AuthenticationService}
]

const generalServiceInjectables: HttpAppServiceInjectable = []

const primengServiceInjectables: Array<any> = [
  {provide: MessageService, useClass: MessageService},
]

export const AppServiceInjectables: HttpAppServiceInjectable[] = [
  authenticationServiceInjectables,
  generalServiceInjectables,
  primengServiceInjectables
]
