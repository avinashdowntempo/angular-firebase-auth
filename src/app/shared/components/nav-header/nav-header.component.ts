import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  @Output() mydata: EventEmitter<any> = new EventEmitter();
  @Input() panel: string;
  user: any;
  data: Observable<any>;
  providers: [AngularFireAuth]

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.initialise();
  }
  initialise() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
    this.mydata.emit(this.user);
  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
