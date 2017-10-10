import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
