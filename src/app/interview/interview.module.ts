import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InterviewRouting } from './interview.routing';
import { InterviewDashComponent } from './interview-dash/interview-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InterviewRouting,
    NgbModule,
    SharedModule
  ],
  declarations: [InterviewDashComponent, NavbarComponent]
})
export class InterviewModule { }
