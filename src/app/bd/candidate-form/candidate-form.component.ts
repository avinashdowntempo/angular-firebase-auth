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
export class CandidateFormComponent implements OnInit, OnChanges {
  @Input() job: any;
  @Input() candidatedata: any;
  @Output() updateModal: EventEmitter<any> = new EventEmitter();
  hideform = false;
  candidateForm: FormGroup;
  formdata: CandidateModal;
  inputdata: any;
  constructor(private fb: FormBuilder, private modalService: NgbModal, private _candidateFormService: CandidateFormService) {
    this.createForm();
  }
  ngOnInit() {
    this.resetForm();
  }
  createForm() {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      pri_technology: ['', Validators.required],
      sec_technology: '',
      experience: ['', Validators.required],
      email: ['', Validators.required],
      position: [{ value: '', disabled: true }, Validators.required]
    });
  }
  updateFormFields() {
    const formTimer = setInterval(() => {
      if (this.candidateForm !== undefined) {
        clearInterval(formTimer);
        this.candidateForm.patchValue({
          name: this.inputdata.name,
          pri_technology: this.inputdata.pri_technology,
          sec_technology: this.inputdata.sec_technology,
          experience: this.inputdata.experience,
          email: this.inputdata.email
        });
      }
    }, 100);
  }
  resetForm() {
    this.candidateForm.reset(
      {
        position: this.job.title
      }
    );
  }
  updateCandidate() {
    this._candidateFormService.updateCandidate(this.candidateForm.value, this.inputdata._id).subscribe(
      data => console.log('data from token mongoserver', data),
      err => console.log('im the mongoerror', err),
      () => {
        console.log('Request Complete');
        this.hideform = true;
        this.updateModal.emit(this.inputdata._id);
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


  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = change.currentValue;
      let prevVal = change.previousValue;
      if (propName === 'candidatedata') {
        this.inputdata = curVal;
        this.updateFormFields();
      } else if (propName === 'job') {
        this.resetForm();
      }
    }
  }

}
