import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  templateUrl: './password-strength.component.html', // Using external template
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  @Input() password: string | null = '';

  get strength() {
    if (!this.password) return 0;
    let score = this.password.length > 8 ? 50 : 20;
    score += /[A-Z]/.test(this.password) ? 20 : 0;
    score += /[0-9]/.test(this.password) ? 20 : 0;
    score += /[\W]/.test(this.password) ? 10 : 0;
    return score;
  }
}
