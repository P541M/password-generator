import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: true, // Make it a standalone component
  template: `
    <p>Password Strength: {{ strength }}</p>
    <div class="strength-bar">
      <div [style.width.%]="strength"></div>
    </div>
  `,
  styles: [
    `
      .strength-bar {
        width: 100%;
        height: 10px;
        background-color: #e0e0e0;
      }
      .strength-bar div {
        height: 100%;
        background-color: green;
      }
    `,
  ],
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
