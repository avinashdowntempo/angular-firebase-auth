import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result:any;
  constructor(private _http: Http) { }
  getUsers() {
    return this._http.get("https://localhost:3000/users/users")
      .map(result => this.result = result.json().data);
  }
  getToken(first_name:string,last_name:string) {
    const body={first_name:first_name,last_name:last_name};
    return this._http.post("https://localhost:3000/gettoken",body)
      .map(result => this.result = result.json());
  }
}
