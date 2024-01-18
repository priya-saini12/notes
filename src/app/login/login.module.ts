import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../Sharable/Material/material/material.module';

// console.warn("login");
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
})
export class LoginModule {}
