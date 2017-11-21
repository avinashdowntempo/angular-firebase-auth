import { Component, OnInit, Input } from '@angular/core';
import { JobUpdateModalComponent } from '../job-update-modal/job-update-modal.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  show = false;
  @Input() job: any;
  constructor(private modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(JobUpdateModalComponent);
    modalRef.componentInstance.name = this.job;
  }
  toggle() {
    this.show = !this.show;
  }
  ngOnInit() {
  }

}
