import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './Sharable/Material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './crud.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignupModule,
    LoginModule,
    MaterialModule,
    HttpClientModule,
  ],

  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
