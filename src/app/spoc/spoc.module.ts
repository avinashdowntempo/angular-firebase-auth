import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SpocRouting } from './spoc.routing';
import { SpocDashComponent } from './spoc-dash/spoc-dash.component';

@NgModule({
  imports: [
    CommonModule,
    SpocRouting,
    NgbModule
  ],
  declarations: [SpocDashComponent]
})
export class SpocModule { }
