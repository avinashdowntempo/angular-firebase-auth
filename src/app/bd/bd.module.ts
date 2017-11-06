import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BdRouting } from './bd.routing';
import { BdDashComponent } from './bd-dash/bd-dash.component';

@NgModule({
  imports: [
    CommonModule,
    BdRouting,
    NgbModule
  ],
  declarations: [BdDashComponent]
})
export class BdModule { }
