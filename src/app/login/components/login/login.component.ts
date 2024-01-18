import { Component, OnInit } from '@angular/core';
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
    this._service.getUser().subscribe((data) => {
      this.user = data;
    });
  }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  login() {
    this.user.forEach((element: { username: string; password: string }) => {
      if (
        element.username == this.loginForm.value.username &&
        element.password == this.loginForm.value.password
      ) {
        alert('Login Successful');
        sessionStorage.setItem('user', JSON.stringify(element));

        this._route.navigateByUrl('/dashboard');
      }
    });
  }
}
