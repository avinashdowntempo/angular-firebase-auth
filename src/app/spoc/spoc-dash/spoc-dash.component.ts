import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spoc-dash',
  templateUrl: './spoc-dash.component.html',
  styleUrls: ['./spoc-dash.component.css'],

})
export class SpocDashComponent implements OnInit {
  user: any;
  constructor() {
  }
  ngOnInit() {
  }
  getUser(event) {
    this.user = event;
  }

}
