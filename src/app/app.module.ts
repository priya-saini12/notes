import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Sharable/Material/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './crud.service';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

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
