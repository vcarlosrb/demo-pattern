import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response, HttpModule } from '@angular/http';
import { BaseHttp } from './http-base';

@Injectable()
export class AngularHttp extends BaseHttp {
  constructor(private _http: Http) {
    super();
  }

  get(): Promise<any> {
    return this.performRequest(RequestMethod.Get);
  }

  post(): Promise<any> {
    return this.performRequest(RequestMethod.Post);
  }

  put(): Promise<any> {
    return this.performRequest(RequestMethod.Put);
  }

  delete(): Promise<any> {
    return this.performRequest(RequestMethod.Delete);
  }

  private performRequest(method: RequestMethod): Promise<any> {
    let request = new Request({
      method,
      url: this.url,
      headers: this.headers,
      body: this.body,
      params: this.params,
    });

    return this._http
      .request(request)
      .toPromise().then(this.processRequest)
      .catch(this.handleError);
  }

  private processRequest(res: Response): any {
    return res.json();
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
