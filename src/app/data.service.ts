import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result: any;
  constructor(private _http: Http) { }
  getUsers() {
    return this._http.get('https://localhost:3000/users/users')
      .map(result => this.result = result.json().data);
  }
  getToken(email: string, token: string) {
    const body = { email: email, token: token };
    return this._http.post('https://localhost:3000/gettoken', body)
      .map(result => this.result = result.json());
  }
}
