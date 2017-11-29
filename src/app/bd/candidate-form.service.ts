import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidateFormService {

  constructor(private _http: Http, public authHttp: AuthHttp) { }
  createCandidate(formData: any): Observable<any> {
    const myHeader = new Headers();
    const body = formData;
    myHeader.append('Content-Type', 'application/json');
    return this.authHttp.post('https://localhost:3000/candidate/new', body, { headers: myHeader })
      .map(result => result.json());
  }

  getCandidate(searchid: any): Observable<any> {
    return this.authHttp.get('https://localhost:3000/candidate/' + searchid)
      .map(result => result.json());
  }

}
