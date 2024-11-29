import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl = 'http://localhost:3000/api/sessions';

  constructor() {}

  async getSessionByUserId(user_idUser: number): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/${user_idUser}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la sesión:', error);
      throw error;
    }
  }
}