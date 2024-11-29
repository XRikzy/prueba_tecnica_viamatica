import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(credentials: { email: string, password: string }): Observable<any> {
    // This is a mock login service. In a real application, you would make an HTTP request to your backend.
    console.log('Login attempt', credentials);
    return of({ success: true, message: 'Login successful' }).pipe(delay(1000));
  }
}