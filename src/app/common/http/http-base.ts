import { environment } from '../../../environments/environment';

let BASE_API = environment.BASE_API;

export const MUTUAL_AUTH_HEADER: string = 'x-validate-auth';
export const AUTHORIZATION_HEADER: string = 'Authorization';
export const KEYBOARD_HEADER: string = 'X-KEYBOARD';

export abstract class BaseHttp {

  protected url: string;
  protected body: any;
  protected headers: any | null;
  protected params: string | URLSearchParams | { [key: string]: any | any[]; } | null;
  protected response: any;
  protected error: any;

  public setUrl(url: string): BaseHttp {
    //this.url = BASE_API + url;
    this.url = url;

    return this;
  }

  public setBody(body: any): BaseHttp {
    this.body = body;

    return this;
  }

  public setParam(name: string, value: any): BaseHttp {
    if (!this.params) {
      this.params = {};
    }

    if (value) {
      this.params[name] = value;
    }

    return this;
  }

  public addHeader(name: string, value: string): BaseHttp {
    if (!this.headers) {
      this.headers = {};
    }

    this.headers[name] = value;

    return this;
  }

  public removeHeader(name: string): void {
    if (!this.headers) {
      return;
    }

    delete this.headers[name];
  }

  public clearHeaders(): void {
    this.headers = null;
  }

  abstract get(): Promise<any>;

  abstract post(): Promise<any>;

  abstract put(): Promise<any>;

  abstract delete(): Promise<any>;

}