import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouteRoleService {

  constructor(private router: Router) { }
  routeRole(role: string): void {
    switch (role) {
      case 'BD': {
        this.router.navigate(['bd-dash']);
        console.log('routed to BD screen');
        break;
      }
      case 'spoc': {
        this.router.navigate(['spoc-dash']);
        console.log('routed to spoc screen');
        break;
      }
      case 'Interviewee': {
        this.router.navigate(['interview-dash']);
        console.log('routed to Interviewee screen');
        break;
      }
      default: {
        console.log('Invalid role');
        break;
      }
    }
  }

}
