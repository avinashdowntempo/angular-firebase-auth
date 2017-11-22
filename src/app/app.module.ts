import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http, RequestOptions } from '@angular/http';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BdGuard } from './loginscreen/bd.guard';
import { IntervieweeGuard } from './loginscreen/interviewee.guard';
import { SpocGuard } from './loginscreen/spoc.guard';

import { AppRoutingModule } from './app-routing.module';
import { BdModule } from './bd/bd.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
    noJwtError: false,
    noTokenScheme: true
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BdModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCRv69DsqAEE5SwnSqouXf_DjS4YLNzDFk',
      authDomain: 'fir-app-7cb0a.firebaseapp.com',
      databaseURL: 'https://fir-app-7cb0a.firebaseio.com',
      projectId: 'fir-app-7cb0a',
      storageBucket: 'fir-app-7cb0a.appspot.com',
      messagingSenderId: '619419098799'
    }),
  ],
  providers: [BdGuard, IntervieweeGuard, SpocGuard, AngularFireAuth, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
