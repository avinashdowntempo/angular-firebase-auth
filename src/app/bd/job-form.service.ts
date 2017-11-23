import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JobFormService {

  constructor(private _http: Http, public authHttp: AuthHttp) { }
  createJob(formData: any): Observable<any> {
    const myHeader = new Headers();
    const body = formData;
    myHeader.append('Content-Type', 'application/json');
    return this.authHttp.post('https://localhost:3000/jobs/new', body, { headers: myHeader })
      .map(result => result.json());
  }
  updateJob(formData: any, _id: number): Observable<any> {
    const myHeader = new Headers();
    const body = formData;
    body._id = _id;
    myHeader.append('Content-Type', 'application/json');
    return this.authHttp.patch('https://localhost:3000/jobs/update', body, { headers: myHeader })
      .map(result => result.json());
  }
  getJobs(): Observable<any> {
    return this.authHttp.get('https://localhost:3000/jobs/all')
      .map(result => result.json());
  }

}
