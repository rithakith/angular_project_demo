import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SignupFormComponent } from '../../shared/organisms/signup-form/signup-form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, SignupFormComponent],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit() {
    console.log('Signup attempt:', { name: this.name, email: this.email });
  }
}
