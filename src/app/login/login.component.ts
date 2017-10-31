import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DataService } from '../data.service';
import { LoginServiceService } from '../login-service.service';
import { ExpressToken } from '../express-token';
import { LoginData } from '../login-data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isloggedin: any;
  public facebook = false;
  users: Array<any>;
  expresstoken: ExpressToken;
  currentUser: any;
  promise: Promise<{}>;
  constructor(public afAuth: AngularFireAuth, private _dataService: DataService, private router: Router, private _loginService: LoginServiceService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);

  }
  ngOnInit() {
    console.log('login init');
  }

  logintest() {
    this._loginService.login().subscribe(
      value => this.currentUser = value
    );
    const LoginTimer = setInterval(() => {
      if (this.currentUser.username !== '' && this.currentUser.facebook === false) {
        clearInterval(LoginTimer);
        this.router.navigate(['bd-dash']);
      }
    }, 1000);
  }

  fblogintest() {
    this._loginService.facebookLogin().subscribe(
      value => { this.currentUser = value; console.log('this.currentuser', this.currentUser) }
    );
    const LoginTimer = setInterval(() => {
      if (this.currentUser.username !== '' && this.currentUser.facebook === true) {
        clearInterval(LoginTimer);
        this.router.navigate(['spoc-dash']);
      }
    }, 1000);
  }







  /* login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider).then((result) => {
        let token = '';
        token = result.credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        this.facebook = false;
        console.log(this.facebook);
        console.log('email:', user.email);
        if (user.email && user.email !== '') {
          this._dataService.getToken(user.email, 'token received')
            .subscribe(res => {
              this.expresstoken = res;
              console.log('heeeeeeeeello:', res, 'expresstoken', this.expresstoken);
              localStorage.setItem('currentUser', JSON.stringify({ username: this.expresstoken.first_name, facebook: false, name: user.displayName, photoUrl: user.photoURL }));
              this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            }
            );
        }
      });
      const LoginTimer = setInterval(() => {
        if (this.currentUser.first_name !== '' && this.currentUser.facebook === false) {
          clearInterval(LoginTimer);
        this.router.navigate(['bd-dash']);
      }
      }, 1000 );
   }
  
   facebookLogin() {
      const provider = new firebase.auth.FacebookAuthProvider();;
      provider.addScope('user_birthday');
      provider.addScope('email');
      provider.addScope('public_profile');
      provider.addScope('user_friends');
      this.afAuth.auth.signInWithPopup(provider).then((result) => {
        const token = result.credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        this.facebook = true;
        console.log(this.facebook);
        console.log('email:', user.email);
        if (user.email && user.email !== '') {
          this._dataService.getToken(user.email, 'token received')
            .subscribe(res => {
              this.expresstoken = res;
              console.log('heeeeeeeeello:', res, 'expresstoken', this.expresstoken);
              localStorage.setItem('currentUser', JSON.stringify({ username: this.expresstoken.first_name, facebook: true, name: user.displayName, photoUrl: user.photoURL }));
              this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            }
            );
  
        }
      });
      const LoginTimer = setInterval(() => {
        if (this.currentUser.first_name !== '' && this.currentUser.facebook) {
          clearInterval(LoginTimer);
        this.router.navigate(['spoc-dash']);
      }
      }, 1000 );
    }*/


}
