import { Injectable } from '@angular/core';
import { Router, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BdGuard implements CanLoad, CanActivateChild {
  canActivateChild(): boolean {
    const token = JSON.parse(localStorage.getItem('currentUser'));
    if (token) {
      if (token.role === 'BD') {
        return true;
      }
    }
    // not logged in so redirect to login page

    this.router.navigate(['/login']);
    return false;
  }
  constructor(private router: Router) { }
  canLoad(): boolean {
    const token = JSON.parse(localStorage.getItem('currentUser'));
    if (token) {
      if (token.role === 'BD') {
        return true;
      }
    }
    // not logged in so redirect to login page
    window.alert('not authorized');
    this.router.navigate(['/login']);
    return false;
  }
}
