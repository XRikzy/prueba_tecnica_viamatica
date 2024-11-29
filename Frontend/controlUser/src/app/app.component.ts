import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'controlUser';
  isAdmin: boolean = false;

  constructor() {
    const rol = localStorage.getItem('rol');
    if (rol === 'admin') {
      this.isAdmin = true;
    }
  }
}
