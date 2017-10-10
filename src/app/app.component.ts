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
    <button type="button" class="btn btn-warning" (click)="logout()">Logout</button>
  </div>
  </div>
</div>
  
    <ng-template #showLogin>


<div class="jumbotron">
  <h1 class="display-3">Please login.</h1>
  <p class="lead">This is a simple angular firebase app to test authentication.</p>
  <hr class="my-4">
  <p class="lead">
       <button type="button" class="btn btn-sm btn-social btn-lg btn-google" (click)="login()">
     <i class="fa fa-google"></i>Sign in with Google</button>
      <button type="button" class="btn btn-sm btn-social btn-lg btn-facebook" (click)="facebookLogin()">
      <i class="fa fa-facebook"></i>Sign in with Facebook</button>
  </p>
</div>
    </ng-template>
  `,
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent {
  facebook='facebook';
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
     this.facebook = 'google';
    });
  }
  facebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();;
    provider.addScope('user_birthday');
    provider.addScope('email');
    provider.addScope('public_profile');
    provider.addScope('user_friends');
    this.afAuth.auth.signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     console.log(token);
     // The signed-in user info.
     var user = result.user;
     console.log(user);
     this.facebook='facebook';
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}