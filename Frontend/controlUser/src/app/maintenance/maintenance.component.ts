import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
;

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
  providers: [UserService],
  imports: [ReactiveFormsModule, CommonModule, FormsModule]
})
export class MaintenanceComponent implements OnInit {
  userForm !: FormGroup;
  searchQuery: string = '';
  isAdmin: boolean = false;
  users = {
    idUser: 0,
    username: '',
    mail: '',
    status: '',
    failedAttempts: 0,
    SessionActive: '',
    createdAt: '',
    updatedAt: '',
    idPerson2: 0
  };
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('rol') === 'admin';

    if (!this.isAdmin) {
      this.router.navigate(['/welcome']);
    }
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: ['active', Validators.required]
    });
  }

  applySearch(): void {
    this.userService.searchUsers(this.searchQuery)
      .then(data => {
        console.log('Usuarios encontrados:', data);
        this.users = data;  // Suponiendo que 'data' es una lista de usuarios.
      })
      .catch(error => {
        console.error('Error al buscar usuarios:', error);
      });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);
    }
  }

  uploadUsers(): void {
    console.log('Cargar usuarios desde archivo');
  }

  updateUser(): void {
    if (this.userForm?.valid) {
      const userId = this.users.idUser;  // Deberías usar el id del usuario correcto.
      const userData = this.userForm.value;
      this.userService.updateUser(userId, userData)
        .then(response => {
          console.log('Usuario actualizado', response);
        })
        .catch(error => {
          console.error('Error al actualizar el usuario:', error);
        });
    } else {
      console.log('Formulario inválido');
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
