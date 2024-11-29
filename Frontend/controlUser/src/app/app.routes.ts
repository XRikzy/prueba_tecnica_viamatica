import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { MantenimientoUsuarioComponent } from './mantenimiento-usuario/mantenimiento-usuario.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'bienvenida',
    component: BienvenidaComponent,
    canActivate: [AuthGuard],
    data: { role: 'user' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'user-maintenance',
    component: MantenimientoUsuarioComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
