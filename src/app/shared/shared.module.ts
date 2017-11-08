import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavHeaderComponent } from './components/nav-header/nav-header.component';

@NgModule({
  declarations: [
    NavHeaderComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavHeaderComponent
  ]
})
export class SharedModule { }
