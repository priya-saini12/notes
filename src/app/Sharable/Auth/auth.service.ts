import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userObj = sessionStorage.getItem('user');
  constructor() {}
  isLoggedIn() {
    return this.userObj;
  }
}
