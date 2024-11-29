import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logoutUrl = 'http://localhost:3000/api/logout';

  constructor() {}

  async logout(): Promise<void> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token no encontrado en localStorage');
    }

    try {
      await axios.post(this.logoutUrl, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }
}
