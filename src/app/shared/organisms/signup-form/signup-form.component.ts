import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';

@Component({
  selector: 'app-organism-signup-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, InputComponent, FormFieldComponent],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  @Input() name = '';
  @Input() email = '';
  @Input() password = '';
  @Input() confirmPassword = '';

  @Output() nameChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() passwordChange = new EventEmitter<string>();
  @Output() confirmPasswordChange = new EventEmitter<string>();
  @Output() submitForm = new EventEmitter<void>();

  onSubmit() {
    this.submitForm.emit();
  }
}
