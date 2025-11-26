import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';
  private tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    console.log('trying to login (auth service)', { email, password });
    return this.http.post(`${this.baseUrl}/auth/login`, { email, password });
  }

  saveToken(token: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(this.tokenKey);
    }
    this.router.navigate(['/login']);
  }

  getUserName(): string | null {
    if (typeof window === 'undefined' || !window.localStorage) return null;

    const token = localStorage.getItem(this.tokenKey);
    if (!token) return null;

    try {
      const decoded: any = jwtDecode(token);
      return decoded.name || null;
    } catch (e) {
      console.error('Invalid token', e);
      return null;
    }
  }
}
