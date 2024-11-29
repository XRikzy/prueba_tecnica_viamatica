import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Aquí importas las rutas
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Usas la constante 'routes' importada
  exports: [RouterModule]
})
export class AppRoutingModule { }
