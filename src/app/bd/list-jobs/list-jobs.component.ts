import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';

import { JobUpdateModalComponent } from '../job-update-modal/job-update-modal.component';
import { CandidateFormService } from './../candidate-form.service';
@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  show = false;
  candidates: [any];
  @Input() job: any;
  @Input() opentab: any;
  @Output() updateModal: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal, private _candidateFormService: CandidateFormService) { }
  open() {
    const modalRef = this.modalService.open(JobUpdateModalComponent);
    modalRef.componentInstance.job = this.job;
    modalRef.result.then(result => {
      if (result !== 'Close click') {
        this.updateModal.emit(this.job._id);
      }
    });
  }
  listCandidate() {
    this._candidateFormService.getCandidate(this.job._id).subscribe((result) => {
      this.candidates = result.value;
      console.log('result', result);
    });
  }

  openCandidate() {
    const modalRef = this.modalService.open(JobUpdateModalComponent);
    modalRef.componentInstance.job = this.job;
    modalRef.componentInstance.candidate = true;
    modalRef.result.then(result => {
      if (result !== 'Close click') {
        this.updateModal.emit(this.job._id);
        this.show = true;
      }
    });
  }
  editCandidate(candidate) {
    const modalRef = this.modalService.open(JobUpdateModalComponent);
    modalRef.componentInstance.job = this.job;
    modalRef.componentInstance.candidate = true;
    modalRef.componentInstance.candidatedata = candidate;
    modalRef.result.then(result => {
      if (result !== 'Close click') {
        this.updateModal.emit(this.job._id);
        this.show = true;
      }
    });
  }
  toggle() {
    this.show = !this.show;
  }
  ngOnInit() {
    this.listCandidate();
    if (this.opentab === this.job._id) {
      this.show = true;
    }
  }

}
