import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any;
  constructor(private router: Router) {}
  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user') || '');
  }
  logout() {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
