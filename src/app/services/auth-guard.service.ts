import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (sessionStorage.getItem('isRegistered') === 'true') return true;
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}
