import { Component } from '@angular/core';
import { materials } from '../../shared/angular-material/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [materials, ReactiveFormsModule, FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true; // Hide password toggle

  constructor(private fb: FormBuilder, private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
    }
  }

  routeToSignUp(){
    this.router.navigate(['/sign-up']);

  }
  login() {
    // Perform authentication logic here (e.g., API call)
    
    // Simulating a successful login
    localStorage.setItem('user', JSON.stringify({ loggedIn: true }));

    // Redirect to dashboard
    this.router.navigate(['/app']);
  }
}
