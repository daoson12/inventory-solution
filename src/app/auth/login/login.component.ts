import { Component } from '@angular/core';
import { materials } from '../../shared/angular-material/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

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
  errorMessage = '';
  constructor(private fb: FormBuilder, private router:Router,private authService: AuthService) {
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
    if (!this.authService.login(this.loginForm.value)) {
      this.errorMessage = 'Invalid username or password';
    }
}

}
