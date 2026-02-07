import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';

@Component({
  selector: 'app-organism-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, InputComponent, FormFieldComponent],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Input() email = '';
  @Input() password = '';

  @Output() emailChange = new EventEmitter<string>();
  @Output() passwordChange = new EventEmitter<string>();
  @Output() submitForm = new EventEmitter<void>();

  onSubmit() {
    this.submitForm.emit();
  }
}
