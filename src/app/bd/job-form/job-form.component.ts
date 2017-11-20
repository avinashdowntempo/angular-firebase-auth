import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  selected = 'Chennai';
  jobForm: FormGroup;
  cities: [string]= ['chennai', 'hyderabad', 'vizag', 'vijayawada'];
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.jobForm.reset();
  }
  createForm() {
    this.jobForm = this.fb.group({
      title : ['', Validators.required ],
      technology1 : ['', Validators.required ],
      technology2 : '',
      technology3 : '',
      city : ['', Validators.required ],
      comment : ['', Validators.required ],
      minexp : ['', Validators.required ],
      maxexp : ['', Validators.required ],
      email : ['', Validators.required ],
      description : ['', Validators.required]
    });
  }
  reserForm() {
    this.jobForm.reset();
  }
  ngOnInit() {
  }

}
