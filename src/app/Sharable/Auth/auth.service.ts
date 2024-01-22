import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn() {
    const userData = sessionStorage.getItem('user');
    return userData;
  }
}
