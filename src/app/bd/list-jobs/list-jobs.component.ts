import { Component, OnInit, Input, Output } from '@angular/core';
import { JobUpdateModalComponent } from '../job-update-modal/job-update-modal.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  show = false;
  @Input() job: any;
  @Output() updateModal: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(JobUpdateModalComponent);
    modalRef.componentInstance.job = this.job;
    modalRef.result.then(result => {
      if (result !== 'Close click') {
        this.updateModal.emit('modal updated');
      }
    });
  }
  toggle() {
    this.show = !this.show;
  }
  ngOnInit() {
  }

}
