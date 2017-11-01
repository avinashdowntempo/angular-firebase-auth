import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { BdDashComponent } from './bd-dash/bd-dash.component';
import { SpocDashComponent } from './spoc-dash/spoc-dash.component';
import { InterviewDashComponent } from './interview-dash/interview-dash.component';
import { LoginServiceService } from './login-service.service';
import { RouteRoleService } from './route-role.service';
import { BdGuardGuard } from './bd-guard.guard';
import { IntervieweeGuardGuard } from './interviewee-guard.guard';
import { SpocGuardGuard } from './spoc-guard.guard';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
  tokenGetter: (() => localStorage.getItem('token')),
  globalHeaders: [{'Content-Type': 'application/json'}],
  noJwtError: false,
  noTokenScheme: true
  }), http, options);
}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bd-dash', component: BdDashComponent, canActivate: [BdGuardGuard] },
  { path: 'spoc-dash', component: SpocDashComponent, canActivate: [SpocGuardGuard] },
  { path: 'interview-dash', component: InterviewDashComponent, canActivate: [IntervieweeGuardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BdDashComponent,
    SpocDashComponent,
    InterviewDashComponent
  ],
  imports: [NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
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
  providers: [BdGuardGuard, IntervieweeGuardGuard, SpocGuardGuard, DataService, LoginServiceService, RouteRoleService, AngularFireAuth, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
