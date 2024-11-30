import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
})
export class DashboardComponent {
  active_users: number = 0;
  inactive_users: number = 0;
  blocked_users: number = 0;

  constructor(private router: Router, private authService: AuthService) {
    if (localStorage.getItem('rol') !== 'admin') {
      this.router.navigate(['/welcome']);
    }
  }
  ngOnInit(): void {
    this.loadMetrics();
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
  async loadMetrics() {
    this.authService
      .getMetrics()
      .then((data) => {
        this.active_users = data[0].active_users || 0;
        this.inactive_users = data[0].inactive_users || 0;
        this.blocked_users = data[0].blocked_users || 0;
        localStorage.setItem('activeUsers', this.active_users.toString());
        localStorage.setItem('inactiveUsers', this.inactive_users.toString());
        localStorage.setItem('blockedUsers', this.blocked_users.toString());
      })
      .catch((error) => {
        console.error('Error al cargar las métricas:', error);
      });
  }
}
