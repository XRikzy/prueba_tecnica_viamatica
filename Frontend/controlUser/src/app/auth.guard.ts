import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginServer: LoginService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    const token = this.loginServer.getToken();

    if (token) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
