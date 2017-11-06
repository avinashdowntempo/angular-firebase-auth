import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterviewDashComponent } from './interview-dash/interview-dash.component';

const routes: Routes = [
  { path: '', component: InterviewDashComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class InterviewRouting { }
