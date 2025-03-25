import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface LoginPayload {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  authStatus = this.isAuthenticated.asObservable();

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    // Sync auth state on service initialization (after page reload)
    if (this.hasToken()) {
      this.isAuthenticated.next(true);
    }
  }

  // ✅ Get token only if in the browser
  getToken(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : null;
  }

  // ✅ Set token only if in the browser
  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  // ✅ Remove token only if in the browser
  removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }

  // ✅ Check if user has a valid token
  private hasToken(): boolean {
    return !!this.getToken();
  }

  // ✅ Login method
  login(payload: LoginPayload): { success: boolean; message: string } {
    const validateCredentials = payload.email === 'admin@gmail.com' && payload.password === 'password';

    if (validateCredentials) {
      this.setToken('fake-jwt-token'); // Store token
      this.isAuthenticated.next(true); // Update auth state
      this.router.navigate(['/app']); // Redirect to dashboard
      return { success: true, message: 'Login successful' };
    }

    return { success: false, message: 'Invalid email or password' };
  }

  // ✅ Logout method
  logout(): void {
    this.removeToken(); // Remove token
    this.isAuthenticated.next(false); // Update auth state
    this.router.navigate(['/login']); // Redirect to login page
  }

  // ✅ Check if user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }
}
