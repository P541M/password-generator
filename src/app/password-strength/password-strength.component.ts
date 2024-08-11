import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  @Input() password: string | null = '';

  get strength() {
    if (!this.password) return 0;

    let score = 0;

    // Length scoring adjusted for 12-100 characters
    const length = this.password.length;
    if (length >= 20) {
      score += 30; // Maximum length bonus
    } else if (length >= 18) {
      score += 25; // Very strong length
    } else if (length >= 15) {
      score += 20; // Strong length
    } else if (length >= 12) {
      score += 10; // Minimum length
    }

    // Character variety scoring
    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[\W]/.test(this.password);

    const varietyCount = [
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSymbols,
    ].filter(Boolean).length;
    score += varietyCount * 15;

    // Penalize repetitive characters
    const uniqueChars = new Set(this.password).size;
    const repetitionPenalty = (length - uniqueChars) * 2;
    score -= repetitionPenalty;

    // Penalize common patterns (e.g., '1234', 'abcd', 'password')
    const commonPatterns = [/1234/, /abcd/, /password/, /qwerty/, /letmein/];
    for (const pattern of commonPatterns) {
      if (pattern.test(this.password.toLowerCase())) {
        score -= 20;
        break;
      }
    }

    // Ensure the score is within 0-100 range
    score = Math.max(0, Math.min(score, 100));

    return score;
  }
}
