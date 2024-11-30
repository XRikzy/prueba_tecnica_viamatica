import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users'; 
  private searchUrl = 'http://localhost:3000/api/users/search'

  constructor() {}

 
  async getUsers() {
    return axios.get(this.apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching users:', error);
        throw error;
      });
  }

  async uploadUsers(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return axios.post(`${this.apiUrl}/upload`, formData)
      .then(response => response.data)
      .catch(error => {
        console.error('Error uploading file:', error);
        throw error;
      });
  }

  async updateUser(userId: number, userData: any) {
    return axios.put(`${this.apiUrl}/${userId}`, userData)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error updating user ${userId}:`, error);
        throw error;
      });
  }


  async searchUsers(query: string) {
    return axios.get(`${this.searchUrl}/${query}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error searching users:', error);
        throw error;
      });
  }
}


