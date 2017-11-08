import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
    noJwtError: false,
    noTokenScheme: true
  }), http, options);
}

const appRoutes: Routes = [
  { path: 'login', loadChildren: 'app/loginscreen/loginscreen.module#LoginscreenModule' },
  { path: 'bd-dash', loadChildren: 'app/bd/bd.module#BdModule', canLoad: [BdGuard] },
  { path: 'spoc-dash', loadChildren: 'app/spoc/spoc.module#SpocModule', canLoad: [SpocGuard] },
  { path: 'interview-dash', loadChildren: 'app/interview/interview.module#InterviewModule', canLoad: [IntervieweeGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', loadChildren: 'app/loginscreen/loginscreen.module#LoginscreenModule' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [NgbModule.forRoot(),
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
    FormsModule,
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
