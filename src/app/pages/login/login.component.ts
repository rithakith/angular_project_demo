import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginFormComponent } from '../../shared/organisms/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    console.log('Login attempt:', { email: this.email, password: this.password });
  }
}
