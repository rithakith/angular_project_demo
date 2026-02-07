import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Output() onClick = new EventEmitter<Event>();

  getClasses(): string {
    switch (this.variant) {
      case 'primary':
        return 'bg-primary hover:bg-blue-600 text-white focus:ring-blue-500';
      case 'secondary':
        return 'bg-secondary hover:bg-slate-600 text-white focus:ring-slate-500';
      case 'outline':
        return 'bg-transparent border-2 border-primary text-primary hover:bg-blue-50 focus:ring-blue-500';
      default:
        return '';
    }
  }
}
