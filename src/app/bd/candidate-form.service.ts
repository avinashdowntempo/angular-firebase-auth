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

  updateCandidate(formData: any, _id: number): Observable<any> {
    const myHeader = new Headers();
    const body = formData;
    body._id = _id;
    myHeader.append('Content-Type', 'application/json');
    return this.authHttp.patch('https://localhost:3000/candidate/update', body, { headers: myHeader })
      .map(result => result.json());
  }
  deleteCandidate(_id: string): Observable<any> {
    const myHeader = new Headers();
    const body = { _id: _id };
    myHeader.append('Content-Type', 'application/json');
    return this.authHttp.patch('https://localhost:3000/candidate/delete', body, { headers: myHeader })
      .map(result => result.json());
  }

  getCandidate(searchid: any): Observable<any> {
    return this.authHttp.get('https://localhost:3000/candidate/' + searchid)
      .map(result => result.json());
  }

  getAllCandidates(): Observable<any> {
    return this.authHttp.get('https://localhost:3000/candidate/all')
      .map(result => result.json());
  }

  selectedCandidate(): Observable<any> {
    return this.authHttp.get('https://localhost:3000/candidate/selected')
      .map(result => result.json());
  }

  pendingCandidate(): Observable<any> {
    return this.authHttp.get('https://localhost:3000/candidate/pending')
      .map(result => result.json());
  }

  rejectedCandidate(): Observable<any> {
    return this.authHttp.get('https://localhost:3000/candidate/rejected')
      .map(result => result.json());
  }

}
