import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPlaceholder } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BdRouting } from './bd.routing';
import { BdDashComponent } from './bd-dash/bd-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { JobFormComponent } from './job-form/job-form.component';
import { JobFormService } from './job-form.service';

@NgModule({
  imports: [
    CommonModule,
    BdRouting,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule
  ],
  declarations: [BdDashComponent, NavbarComponent, JobFormComponent],
  providers: [JobFormService],
  entryComponents: [],
})
export class BdModule { }
