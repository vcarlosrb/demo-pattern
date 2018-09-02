import { Injectable } from '@angular/core';
import { AngularHttp } from "../../../common/http/angular-http";
import { HttpApi } from "../../../common/http/http-api";

@Injectable()
export class UserService {
  constructor(
    private _http: AngularHttp
  ) { }

  // Example
  getById(): Promise<any> {
    this._http.setUrl(HttpApi.user.getById('15'));

    return this._http.get();
  }
}
