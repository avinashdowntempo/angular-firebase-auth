import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DataService } from '../data.service';
import { LoginServiceService } from '../login-service.service';
import { ExpressToken } from '../express-token';
import { LoginData } from '../login-data';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { RouteRoleService } from '../route-role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  users: Array<any>;
  expresstoken: ExpressToken;
  currentUser: any;
  promise: Promise<{}>;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private _routeService: RouteRoleService, public afAuth: AngularFireAuth, private _dataService: DataService, private router: Router, private _loginService: LoginServiceService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);

  }
  ngOnInit() {
    console.log('login init');
  }
  testtoken() {
    this._dataService.getUsersWithToken();
    const token = localStorage.getItem('token');
    console.log(token);
    console.log('decoded token', this.jwtHelper.decodeToken(token));
    console.log('token expiration date', this.jwtHelper.getTokenExpirationDate(token));
    console.log('token expired', this.jwtHelper.isTokenExpired(token));
    console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
    );
  }
  logintest() {
    this._loginService.login().subscribe(
      value => this.currentUser = value
    );
    const LoginTimer = setInterval(() => {
      if (this.currentUser.username !== '' && this.currentUser.facebook === false) {
        clearInterval(LoginTimer);
        this._routeService.routeRole(this.currentUser.role);
      }
    }, 1000);
  }
  locallogin() {
    console.log('email:', this.email, '    password:', this.password);
    this._loginService.locallogin(this.email, this.password).subscribe(
      value => { this.currentUser = value; console.log('this.currentuser', this.currentUser) }
    );
    const LoginTimer = setInterval(() => {
      if (this.currentUser.username !== '' && this.currentUser.facebook === false) {
        clearInterval(LoginTimer);
        this._routeService.routeRole(this.currentUser.role);
      }
    }, 1000);
    this.email = this.password = '';
  }
  fblogintest() {
    this._loginService.facebookLogin().subscribe(
      value => { this.currentUser = value; console.log('this.currentuser', this.currentUser) }
    );
    const LoginTimer = setInterval(() => {
      if (this.currentUser.username !== '' && this.currentUser.facebook === true) {
        clearInterval(LoginTimer);
        this._routeService.routeRole(this.currentUser.role);
      }
    }, 1000);
  }
}
