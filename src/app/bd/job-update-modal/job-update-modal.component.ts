import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-update-modal',
  templateUrl: './job-update-modal.component.html',
  styleUrls: ['./job-update-modal.component.css']
})
export class JobUpdateModalComponent implements OnInit {
  @Input() job: any;
  @Input() candidate: boolean;
  updateSucess = false;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  closeModal() {
    this.updateSucess = true;
    setTimeout(() => {
      this.activeModal.close();
    }, 1000);
  }

}
