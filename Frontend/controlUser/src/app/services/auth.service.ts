import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logoutUrl = 'http://localhost:3000/api/logout';
  private metricsUrl = 'http://localhost:3000/api/data/metrics'
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
   getMetrics() {
    return axios.get(this.metricsUrl)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.error('Error al obtener métricas:', error);
        throw error;
      });
  }
  
}
