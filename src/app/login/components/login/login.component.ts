import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any;
  constructor(private _service: CrudService, private _route: Router) {
    this._service.getUser().subscribe((data: any) => {
      this.user = data;
    });
  }
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.user.forEach((element: any) => {
      if (
        element.userName == this.loginForm.value.userName &&
        element.password == this.loginForm.value.password
      ) {
        alert('Login Successful');
        sessionStorage.setItem('user', JSON.stringify(element));
        this._route.navigateByUrl('/dashboard');
      }
    });
  }
}
