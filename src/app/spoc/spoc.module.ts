import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SpocRouting } from './spoc.routing';
import { SpocDashComponent } from './spoc-dash/spoc-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SpocRouting,
    NgbModule,
    SharedModule
  ],
  declarations: [SpocDashComponent, NavbarComponent]
})
export class SpocModule { }
