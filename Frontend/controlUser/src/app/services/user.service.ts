import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUserIndicators(): Observable<any> {
    // This is mock data. In a real application, you would fetch this from a backend.
    return of({
      activeUsers: 150,
      inactiveUsers: 50,
      blockedUsers: 10
    });
  }

  getLoginIndicators(): Observable<any> {
    // This is mock data. In a real application, you would fetch this from a backend.
    return of({
      failedLogins: 25,
      successfulLogins: 200
    });
  }
}
