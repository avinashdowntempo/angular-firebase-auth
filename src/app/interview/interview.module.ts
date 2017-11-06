import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InterviewRouting } from './interview.routing';
import { InterviewDashComponent } from './interview-dash/interview-dash.component';

@NgModule({
  imports: [
    CommonModule,
    InterviewRouting,
    NgbModule
  ],
  declarations: [InterviewDashComponent]
})
export class InterviewModule { }
