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
    this._candidateFormService.getAllCandidates().subscribe((result) => {
      this.candidates = result.value;
      console.log('result', result);
    });
  }
  showCandidate(status) {
    this.display = status;
  }
  ngOnInit() {
    this.listCandidate();
  }

}
