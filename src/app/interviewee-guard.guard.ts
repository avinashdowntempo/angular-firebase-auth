import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IntervieweeGuardGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(): boolean {
    const token = JSON.parse(localStorage.getItem('currentUser'));
    if (token.role === 'Interviewee') {
      return true;
  }
  // not logged in so redirect to login page
  this.router.navigate(['/login']);
  return false;
  }
}
