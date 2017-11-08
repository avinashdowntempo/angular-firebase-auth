import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BdRouting } from './bd.routing';
import { BdDashComponent } from './bd-dash/bd-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BdRouting,
    NgbModule,
    SharedModule
  ],
  declarations: [BdDashComponent, NavbarComponent]
})
export class BdModule { }
