import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdDashComponent } from './bd-dash/bd-dash.component';
import { JobFormComponent } from './job-form/job-form.component';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';
import { BdStatusComponent } from './bd-status/bd-status.component';

const routes: Routes = [
  {
    path: '',
    component: BdDashComponent,
    children: [
      {
        path: 'job',
        component: JobFormComponent,
      },
      {
        path: 'candidate',
        component: ManageCandidateComponent,
      },
      {
        path: 'status',
        component: BdStatusComponent,
      },
      { path: '', redirectTo: '/job', pathMatch: 'full' },

    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class BdRouting { }
