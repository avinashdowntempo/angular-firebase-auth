import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { JwtHelper } from 'angular2-jwt';

import { DataService } from './data.service';
import { RouteRoleService } from './route-role.service';



@Injectable()
export class LoginService {
  loginobs?: Observable<any>;
  users: any;
  resp: any;
  currentUser: any;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private _routeRoleService: RouteRoleService, private _dataService: DataService, public afAuth: AngularFireAuth) {
    this._dataService.getUsers()
      .subscribe(res => { this.users = res; console.log('users:', this.users); });
  }

  checkUserLogged(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedtoken = this.jwtHelper.decodeToken(token);
      this._routeRoleService.routeRole(decodedtoken.role);
    }
  }
  localLogin(email: string, password: string): Observable<any> {
    this.loginobs = new Observable(observer => {
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log(value.email);
          console.log('Nice, it worked!');
          if (value.email !== '') {
            this._dataService.getToken(value.email, value.refreshToken)
              .subscribe(res => {
                this.resp = res;
                const decodedtoken = this.jwtHelper.decodeToken(this.resp.token);
                localStorage.setItem('currentUser', JSON.stringify({ token: this.resp.token, username: this.resp.first_name, facebook: false, role: decodedtoken.role, name: this.resp.displayName, photoUrl: 'https://www.touchsupport.com/wp-content/uploads/2015/03/customer-login-white-label.svg' }));
                localStorage.setItem('token', this.resp.token);
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                observer.next(this.currentUser);
                observer.complete();
                console.log('observable', this.loginobs);
              }
              );
          }

        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
          observer.error(new Error(err.message));
        });
    });
    return this.loginobs;
  }
  googleLogin(): Observable<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.loginobs = new Observable(observer => {
      this.afAuth.auth.signInWithPopup(provider).then((result) => {
        let token = '';
        token = result.credential.accessToken;
        const user = result.user;
        if (user.email && user.email !== '') {
          this._dataService.getToken(user.email, token)
            .subscribe(res => {
              this.resp = res;
              const decodedtoken = this.jwtHelper.decodeToken(this.resp.token);
              localStorage.setItem('currentUser', JSON.stringify({ role: decodedtoken.role, token: this.resp.token, username: this.resp.first_name, facebook: false, name: user.displayName, photoUrl: user.photoURL }));
              localStorage.setItem('token', this.resp.token);
              this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
              observer.next(this.currentUser);
              observer.complete();
              console.log('observable', this.loginobs);
            }
            );
        }
      });

    });
    console.log('observable', this.loginobs);
    return this.loginobs;
  }

  facebookLogin(): Observable<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.addScope('email');
    provider.addScope('public_profile');
    provider.addScope('user_friends');
    this.loginobs = new Observable(observer => {
      this.afAuth.auth.signInWithPopup(provider).then((result) => {
        let token = '';
        token = result.credential.accessToken;
        const user = result.user;
        if (user.email && user.email !== '') {
          this._dataService.getToken(user.email, token)
            .subscribe(res => {
              this.resp = res;
              const decodedtoken = this.jwtHelper.decodeToken(this.resp.token);
              localStorage.setItem('currentUser', JSON.stringify({ role: decodedtoken.role, token: this.resp.token, username: this.resp.first_name, facebook: true, name: user.displayName, photoUrl: user.photoURL }));
              localStorage.setItem('token', this.resp.token);
              this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
              observer.next(this.currentUser);
              observer.complete();
              console.log('observable', this.loginobs);
            }
            );
        }
      });

    });
    console.log('observable', this.loginobs);
    return (this.loginobs);
  }
}

