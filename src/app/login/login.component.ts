import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DataService } from '../data.service';
import { ExpressToken } from '../express-token';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]

})
export class LoginComponent implements OnInit {
  public facebook: boolean = false;
  users: Array<any>;
  expresstoken: ExpressToken;
  constructor(public afAuth: AngularFireAuth, private _dataService: DataService, private router: Router) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);

  }
  ngOnInit() {
    console.log("login init");
  }
  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token.
      let token = '';
      token = result.credential.accessToken;
      console.log(token);
      // The signed-in user info.
      let user = result.user;
      console.log(user);
      this.facebook = false;
      console.log(this.facebook);
      console.log("email:", user.email);
      if (user.email && user.email != '') {
        this._dataService.getToken(user.email, "token received")
          .subscribe(res => {
            this.expresstoken = res;
            console.log("heeeeeeeeello:", res, "expresstoken", this.expresstoken);
            localStorage.setItem('currentUser', JSON.stringify({ username: this.expresstoken.first_name, facebook: false, name: user.displayName, photoUrl: user.photoURL }));
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser.first_name != '' && currentUser.facebook === false) {
              this.router.navigate(['bd-dash']);
            }
          }
          );
      }

    });
  }
  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();;
    provider.addScope('user_birthday');
    provider.addScope('email');
    provider.addScope('public_profile');
    provider.addScope('user_friends');
    this.afAuth.auth.signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token.
      var token = result.credential.accessToken;
      console.log(token);
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      this.facebook = true;
      console.log(this.facebook);
      console.log("email:", user.email);
      if (user.email && user.email != '') {
        this._dataService.getToken(user.email, "token received")
          .subscribe(res => {
            this.expresstoken = res;
            console.log("heeeeeeeeello:", res, "expresstoken", this.expresstoken);
            localStorage.setItem('currentUser', JSON.stringify({ username: this.expresstoken.first_name, facebook: true, name: user.displayName, photoUrl: user.photoURL }));
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser.first_name != '' && currentUser.facebook) {
              this.router.navigate(['spoc-dash']);
            }
          }
          );

      }
    });
  }
  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('currentUser');
  }
}
