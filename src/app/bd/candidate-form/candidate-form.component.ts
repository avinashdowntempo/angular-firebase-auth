import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, EmailValidator, Validators, FormControl, FormGroup } from '@angular/forms';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CandidateModal } from '../candidate-modal';
import { CandidateFormService } from './../candidate-form.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {
  @Input() job: any;
  @Output() updateModal: EventEmitter<any> = new EventEmitter();
  hideform = false;
  candidateForm: FormGroup;
  formdata: CandidateModal;
  constructor(private fb: FormBuilder, private modalService: NgbModal, private _candidateFormService: CandidateFormService) { }

  ngOnInit() {
    this.createForm();
    this.resetForm();
  }
  createForm() {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      pri_technology: ['', Validators.required],
      sec_technology: '',
      experience: ['', Validators.required],
      email: ['', Validators.required],
      position: [{ value: this.job.title, disabled: true }, Validators.required]
    });
    this.updateFormFields()
  }
  resetForm() {
    this.candidateForm.reset(
      {
        position: this.job.title
      }
    );
  }

  saveForm() {
    this.formdata = this.candidateForm.value;
    this.formdata.status = 'pending';
    this.formdata.position_id = this.job._id;
    this._candidateFormService.createCandidate(this.formdata).subscribe(
      data => console.log('data from token mongoserver', data),
      err => console.log('im the mongoerror', err),
      () => {
        console.log('Request Complete');
        this.resetForm();
        this.hideform = true;
        this.updateModal.emit('modal updated');
      }
    );
  }

  updateFormFields() {
    this.candidateForm.patchValue({
    });
  }

}
