import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-interview-dash',
  templateUrl: './interview-dash.component.html',
  styleUrls: ['./interview-dash.component.css'],
})
export class InterviewDashComponent implements OnInit {
  user: any;
  data: Observable<any>;
  constructor() {
  }
  ngOnInit() {
  }
  getUser(event) {
    this.user = event;
  }

}
