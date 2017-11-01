import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-spoc-dash',
  templateUrl: './spoc-dash.component.html',
  styleUrls: ['./spoc-dash.component.css'],
  providers: [AngularFireAuth]
})
export class SpocDashComponent implements OnInit {
  user: any;
  data: Observable<any>;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }
  ngOnInit() {
    this.initialise();
  }
  initialise() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
