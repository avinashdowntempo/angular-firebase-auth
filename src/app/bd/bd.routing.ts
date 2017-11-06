import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdDashComponent } from './bd-dash/bd-dash.component';

const routes: Routes = [
  { path: '', component: BdDashComponent }
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

export class BdRouting { }
