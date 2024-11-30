import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private loginService: LoginService , private router: Router) {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const {identifier, password} = this.loginForm.value
      this.loginService.login(identifier, password).then(response => {
        if (response.token && response.rol) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('rol', response.rol);
          localStorage.setItem('username', response.username);

          if (response.rol === 'user') {
            this.router.navigate(['/welcome']);
          } else if (response.rol === 'admin') {
            this.router.navigate(['/dashboard']);
          }
        }
      }).catch(error => {
        console.error('Error de autenticación:', error);
      });
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}

