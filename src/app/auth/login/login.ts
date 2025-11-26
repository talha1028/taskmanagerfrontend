import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  loginError = false;
  loginSuccess = false;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Login response:', res);
        this.authService.saveToken(res.accessToken)
        this.loginError = false;
        this.loginSuccess = true;
        this.router.navigate(['/home']).then(
          success => console.log('Navigation success:', success),
          err => console.error('Navigation error:', err)
        );

      },

      error: () => {
        this.loginError = true;
      }
    });
  }

  signup() {
    this.router.navigate(['/signup']);
  }
}
