import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DataService } from './data.service';
import { ExpressToken } from './express-token';
import { LoginData } from './login-data';

@Injectable()
export class LoginServiceService {
  loginobs?: Observable<any>;
  data: LoginData;
  users: any;
  resp: any;
  currentUser: any;
  constructor(private _dataService: DataService, public afAuth: AngularFireAuth) {
    this._dataService.getUsers()
      .subscribe(res => { this.users = res; console.log('users:', this.users); });
  }

  login(): Observable<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.loginobs = new Observable(observer => {
      this.afAuth.auth.signInWithPopup(provider).then((result) => {
        let token = '';
        token = result.credential.accessToken;
        const user = result.user;
        if (user.email && user.email !== '') {
          this._dataService.getToken(user.email, 'token received')
            .subscribe(res => {
              this.resp = res;
              localStorage.setItem('currentUser', JSON.stringify({ username: this.resp.first_name, facebook: false, name: user.displayName, photoUrl: user.photoURL }));
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
          this._dataService.getToken(user.email, 'token received')
            .subscribe(res => {
              this.resp = res;
              localStorage.setItem('currentUser', JSON.stringify({ username: this.resp.first_name, facebook: true, name: user.displayName, photoUrl: user.photoURL }));
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

