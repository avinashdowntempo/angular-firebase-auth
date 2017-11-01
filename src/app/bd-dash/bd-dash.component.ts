import { Component, OnInit, DoCheck } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bd-dash',
  templateUrl: './bd-dash.component.html',
  styleUrls: ['./bd-dash.component.css'],
  providers: [AngularFireAuth]
})
export class BdDashComponent implements OnInit {
  user: any;
  data: Observable<any>;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }
  ngOnInit() {
    this.initialise();
  }
  initialise() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log('bd-dash-user', this.user);
  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
