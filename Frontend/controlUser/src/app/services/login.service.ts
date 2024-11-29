import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from "axios"
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/login';


  async login(identifier: string, password: string): Promise<any> {
    return axios.post(this.apiUrl, { identifier, password })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Error de autenticación:', error);
        return Promise.reject('Autenticación fallida');
      });
  }


  saveAuthData(token: string, role: string,username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('rol', role);
    localStorage.setItem('username', username)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('rol');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
  }
}
