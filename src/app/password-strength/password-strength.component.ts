import { Component, Input } from '@angular/core';
import zxcvbn from 'zxcvbn';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  @Input() password: string | null = '';

  get strength() {
    if (!this.password) return { score: 0, color: '#ef4444' }; // Default to red

    const analysis = zxcvbn(this.password);
    const scorePercentage = (analysis.score / 4) * 100;

    let color = '#ef4444'; // Default to red for weak passwords
    if (scorePercentage > 75) {
      color = '#10b981'; // Green for strong passwords
    } else if (scorePercentage > 50) {
      color = '#facc15'; // Yellow for medium strength
    } else if (scorePercentage > 25) {
      color = '#fb923c'; // Orange for weak
    }

    return { score: scorePercentage, color };
  }

  get crackTime() {
    if (!this.password) return '';

    const analysis = zxcvbn(this.password);
    return analysis.crack_times_display.offline_slow_hashing_1e4_per_second;
  }
}
