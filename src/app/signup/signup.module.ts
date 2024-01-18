import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../Sharable/Material/material/material.module';
import { HttpClientModule } from '@angular/common/http';

// console.warn("signup");
@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule, HttpClientModule],
  providers: [],
})
export class SignupModule {}
