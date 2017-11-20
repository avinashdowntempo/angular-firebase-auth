import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator, Validators, FormControl, FormGroup } from '@angular/forms';

import { FormModal } from '../form-modal';
import { JobFormService } from '../job-form.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})

export class JobFormComponent implements OnInit {
  formdata: FormModal;
  selected = 'Chennai';
  jobForm: FormGroup;
  cities: [string] = ['chennai', 'hyderabad', 'vizag', 'vijayawada'];
  constructor(private fb: FormBuilder, private _jobFormService: JobFormService) {
    this.createForm();
    this.jobForm.reset();
  }

  createForm() {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      technology1: ['', Validators.required],
      technology2: '',
      technology3: '',
      city: ['', Validators.required],
      comment: ['', Validators.required],
      minexp: ['', Validators.required],
      maxexp: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  resetForm() {
    this.jobForm.reset();
  }
  saveForm() {
    this.formdata = this.jobForm.value;
    this._jobFormService.createJob(this.formdata).subscribe(
      data => console.log('data from token mongoserver', data),
      err => console.log('im the mongoerror', err),
      () => {
        console.log('Request Complete');
        window.alert('form saved');
        this.jobForm.reset();
      }
    );
  }
  ngOnInit() {
  }

}
