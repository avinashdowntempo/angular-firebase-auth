import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div *ngIf="afAuth.authState | async; let user; else showLogin" class="card align-self-center" style="width: 20rem;">
  <img class="card-img-top rounded-circle" [src]="user.photoURL" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title"> {{ user.displayName}}</h4>
    <div class="alert alert-success" role="alert">
    Succesfully logged in!
  </div>
    <button (click)="logout()">Logout</button>
  </div>
  </div>
</div>
  
    <ng-template #showLogin>
      <p>Please login.</p>
      <button (click)="login()">Login with Google</button>
      <button (click)="facebookLogin()">Login with Facebook</button>
    </ng-template>
  `,
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     console.log(token);
     // The signed-in user info.
     var user = result.user;
     console.log(user);
    });
  }
  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();;
    provider.addScope('user_birthday');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     console.log(token);
     // The signed-in user info.
     var user = result.user;
     console.log(user);
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}