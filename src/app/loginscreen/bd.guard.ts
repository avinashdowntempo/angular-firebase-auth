import { Injectable } from '@angular/core';
import { Router, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BdGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad(): boolean  {
    const token = JSON.parse(localStorage.getItem('currentUser'));
    if (token.role === 'BD') {
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
