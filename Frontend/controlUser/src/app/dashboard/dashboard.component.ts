import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // Indicadores de usuarios
  activeUsers: number = 0;
  inactiveUsers: number = 0;
  blockedUsers: number = 0;
  failedLoginAttempts: number = 0;

  constructor(private router: Router) {
    this.activeUsers = parseInt(localStorage.getItem('activeUsers') || '0');
    this.inactiveUsers = parseInt(localStorage.getItem('inactiveUsers') || '0');
    this.blockedUsers = parseInt(localStorage.getItem('blockedUsers') || '0');
    this.failedLoginAttempts = parseInt(
      localStorage.getItem('failedLoginAttempts') || '0'
    );

    if (localStorage.getItem('role') !== 'admin') {
      this.router.navigate(['/welcome']);
    }
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('lastSession');
    this.router.navigate(['/login']);
  }
}
