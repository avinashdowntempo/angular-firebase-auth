import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent {
 public facebook:boolean=false;
  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then( (result) => {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     console.log(token);
     // The signed-in user info.
     var user = result.user;
     console.log(user);
     this.facebook = false;
     console.log(this.facebook);
    });
  }
  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();;
    provider.addScope('user_birthday');
    provider.addScope('email');
    provider.addScope('public_profile');
    provider.addScope('user_friends');
    this.afAuth.auth.signInWithPopup(provider).then( (result) => {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     console.log(token);
     // The signed-in user info.
     var user = result.user;
     console.log(user);
     this.facebook=true;
     console.log(this.facebook);
      
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}