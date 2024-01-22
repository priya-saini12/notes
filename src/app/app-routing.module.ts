import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/components/signup/signup.component';
import { LoginComponent } from './login/components/login/login.component';
import { AuthGuard } from './Sharable/Auth/auth.guard';
import { LoggedInGuard } from './Sharable/Auth/logged-in.guard';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoggedInGuard]},
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
