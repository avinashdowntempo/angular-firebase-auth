import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  show = false;
  @Input() job: any;
  constructor() { }
  toggle() {
    this.show = !this.show;
  }
  ngOnInit() {
  }

}
