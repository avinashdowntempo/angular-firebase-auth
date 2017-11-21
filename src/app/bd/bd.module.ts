import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPlaceholder } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTableModule } from '@angular/material/table';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BdRouting } from './bd.routing';
import { BdDashComponent } from './bd-dash/bd-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { JobFormComponent } from './job-form/job-form.component';
import { JobFormService } from './job-form.service';
import { ManageCandidateComponent } from './manage-candidate/manage-candidate.component';
import { BdStatusComponent } from './bd-status/bd-status.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { JobUpdateModalComponent } from './job-update-modal/job-update-modal.component';

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
    MatSelectModule,
    MatExpansionModule,
    MatTableModule
  ],
  declarations: [
    BdDashComponent,
    NavbarComponent,
    JobFormComponent,
    ManageCandidateComponent,
    BdStatusComponent,
    ListJobsComponent,
    ModalComponentComponent,
    JobUpdateModalComponent
  ],
  providers: [JobFormService],
  entryComponents: [ModalComponentComponent, JobUpdateModalComponent],
})
export class BdModule { }
