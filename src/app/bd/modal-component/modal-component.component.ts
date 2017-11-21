import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  @Input() name: any;
  inputtype: any;
  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {
    this.inputtype = typeof(this.name.title);
  }

}
