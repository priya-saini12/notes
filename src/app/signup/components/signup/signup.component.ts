import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private _service: CrudService, private _route: Router) {}
  hide = true;
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
  });
  add() {
    this._service.createUser(this.addForm.value).subscribe((data) => {
      //  console.log(data);
      this._route.navigateByUrl('/login');
    });
  }
}
