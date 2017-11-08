import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bd-dash',
  templateUrl: './bd-dash.component.html',
  styleUrls: ['./bd-dash.component.css'],
})
export class BdDashComponent implements OnInit {
  user: any;
  constructor() {
  }
  ngOnInit() {
  }
  getUser(event) {
    this.user = event;
  }

}
