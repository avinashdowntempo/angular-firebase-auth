import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-interview-dash',
  templateUrl: './interview-dash.component.html',
  styleUrls: ['./interview-dash.component.css'],
  providers: [AngularFireAuth]
})
export class InterviewDashComponent implements OnInit {

  user: any;
  data: Observable<any>;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }
  ngOnInit() {
    this.initialise();
  }
  initialise() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log('interview-dash-user', this.user);
  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
