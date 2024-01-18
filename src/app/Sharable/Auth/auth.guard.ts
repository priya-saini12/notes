import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _service: AuthService, private _route: Router) {}
  canActivate() {
    if (this._service.isLoggedIn()) {
      return true;
    } else {
      this._route.navigateByUrl('/login');
      return false;
    }
  }
}
