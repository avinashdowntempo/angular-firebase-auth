import { JobFormService } from './../job-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-candidate',
  templateUrl: './manage-candidate.component.html',
  styleUrls: ['./manage-candidate.component.css']
})
export class ManageCandidateComponent implements OnInit {
  jobs: [any];
  opentab: string;
  constructor(private _jobFormService: JobFormService) {
  }

  ngOnInit() {
    this.getJobList();
  }
  getJobList() {
    this._jobFormService.getJobs().subscribe((result) => {
      this.jobs = result.value;
      console.log('result', result);
    });
  }
  updateJobList(event) {
    this.opentab = event;
    this._jobFormService.getJobs().subscribe((result) => {
      this.jobs = result.value;
      console.log('result', result);
    });
  }

}
