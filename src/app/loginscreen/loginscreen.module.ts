import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRouting } from './login.routing';
import { LoginComponent } from './login/login.component';
import { RouteRoleService } from './../shared/services/route-role.service';
import { LoginService } from './../shared/services/login.service';
import { DataService } from './../shared/services/data.service';
import { SpocGuard } from './spoc.guard';
import { IntervieweeGuard } from './interviewee.guard';
import { BdGuard } from './bd.guard';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    LoginRouting,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [BdGuard, IntervieweeGuard, SpocGuard, DataService, LoginService, RouteRoleService, AngularFireAuth]
})
export class LoginscreenModule { }
