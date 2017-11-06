import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpocDashComponent } from './spoc-dash/spoc-dash.component';

const routes: Routes = [
  { path: '', component: SpocDashComponent }
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

export class SpocRouting { }
