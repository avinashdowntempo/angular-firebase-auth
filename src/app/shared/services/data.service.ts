import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result: any;
  constructor(private _http: Http, public authHttp: AuthHttp) { }
  getUsers() {
    return this._http.get('https://localhost:3000/users/users')
      .map(result => this.result = result.json().data);
  }
  getToken(email: string, token: string) {
    const body = { email: email, token: token };
    return this._http.post('https://localhost:3000/gettoken', body)
      .map(result => this.result = result.json());
  }
  getUsersWithToken() {
    this.authHttp.get('https://localhost:3000/users/users')
      .subscribe(
      data => console.log('data from token attached get method', data),
      err => console.log("im the errorooooooooo",err),
      () => console.log('Request Complete')
      );
  }
}
