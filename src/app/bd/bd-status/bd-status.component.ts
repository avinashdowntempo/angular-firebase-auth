import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { JobUpdateModalComponent } from '../job-update-modal/job-update-modal.component';
import { CandidateFormService } from './../candidate-form.service';

@Component({
  selector: 'app-bd-status',
  templateUrl: './bd-status.component.html',
  styleUrls: ['./bd-status.component.css']
})
export class BdStatusComponent implements OnInit {
  show = false;
  candidates: [any];
  display = 'All';
  constructor(private _candidateFormService: CandidateFormService) { }

  listCandidate() {
    this.display = 'All';
    this._candidateFormService.getAllCandidates().subscribe((result) => {
      this.candidates = result.value;
      console.log('result', result);
    });
  }
  selectedCandidate() {
    this.display = 'selected';
    this._candidateFormService.selectedCandidate().subscribe((result) => {
      this.candidates = result.value;
      console.log('result', result);
    });
  }
  pendingCandidate() {
    this.display = 'pending';
    this._candidateFormService.pendingCandidate().subscribe((result) => {
      this.candidates = result.value;
      console.log('result', result);
    });
  }
  rejectedCandidate() {
    this.display = 'rejected';
    this._candidateFormService.rejectedCandidate().subscribe((result) => {
      this.candidates = result.value;
      console.log('result', result);
    });
  }
  ngOnInit() {
    this.listCandidate();
  }

}
