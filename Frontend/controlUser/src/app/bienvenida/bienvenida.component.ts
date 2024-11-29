import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  username: string = '';
  lastSession: string = '';
  loginAttempts: number = 0;
  sessionStartTime: string = '';
  sessionEndTime: string = '';

  constructor(private router: Router) {
  
    this.username = localStorage.getItem('username') || 'Usuario desconocido';

  
    const sessionData = JSON.parse(localStorage.getItem('lastSession') || '{}');
    this.lastSession = sessionData.lastSession || 'No disponible';
    this.loginAttempts = sessionData.loginAttempts || 0;
    this.sessionStartTime = sessionData.sessionStartTime || 'N/A';
    this.sessionEndTime = sessionData.sessionEndTime || 'N/A';
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('lastSession');
    this.router.navigate(['/login']);
  }
}

