import { Injectable } from '@angular/core';
import { AngularHttp } from "../../../common/http/angular-http";
import { HttpApi } from "../../../common/http/http-api";

@Injectable()
export class ProductService {
  constructor(
    private _http: AngularHttp
  ) { }

  // Example
  search(product: string): Promise<any> {
    this._http.setUrl(HttpApi.product.search(product));

    return this._http.get();
  }
}
