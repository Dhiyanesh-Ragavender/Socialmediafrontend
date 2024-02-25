import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>('/api/auth/login', credentials);
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>('/api/auth/register', userData);
  }

  logout(): Observable<any> {
    return this.http.post<any>('/api/auth/logout', {});
  }
}
