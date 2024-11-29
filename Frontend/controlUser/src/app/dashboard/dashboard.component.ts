import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [ReactiveFormsModule, CommonModule, FormsModule]
})
export class DashboardComponent {
  // Indicadores de usuarios
  activeUsers: number = 0;
  inactiveUsers: number = 0;
  blockedUsers: number = 0;
  failedLoginAttempts: number = 0;

  constructor(private router: Router, private authService: AuthService) {
    this.activeUsers = parseInt(localStorage.getItem('activeUsers') || '0');
    this.inactiveUsers = parseInt(localStorage.getItem('inactiveUsers') || '0');
    this.blockedUsers = parseInt(localStorage.getItem('blockedUsers') || '0');
    this.failedLoginAttempts = parseInt(
      localStorage.getItem('failedLoginAttempts') || '0'
    );

    if (localStorage.getItem('rol') !== 'admin') {
      this.router.navigate(['/welcome']);
    }
  }

  async logout() {
    try {
      await this.authService.logout();
      localStorage.removeItem('username');
      localStorage.removeItem('rol');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
