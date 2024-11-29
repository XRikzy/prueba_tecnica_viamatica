import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
})
export class BienvenidaComponent implements OnInit {
  username: string = '';
  entryDate: string = '';
  userRole: string = '';
  closeDate: string = 'No cerrado';
  user_idUser: number = 5;
  constructor(private router: Router, private sessionService: SessionService, private authServices: AuthService) {}

  async ngOnInit() {
    this.username = localStorage.getItem('username') || 'Usuario desconocido';

    try {
      const session = await this.sessionService.getSessionByUserId(
        this.user_idUser
      );
      this.userRole = localStorage.getItem('rol') || 'Sin rol asignado';
      this.entryDate = session.EntryDate || 'N/A';
      this.closeDate = session.CloseDate || 'No cerrado';
    } catch (error) {
      console.error('Error al cargar la sesión:', error);
    }
  }
  async logout() {
    try {
      await this.authServices.logout();
      localStorage.removeItem('username');
      localStorage.removeItem('rol');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
