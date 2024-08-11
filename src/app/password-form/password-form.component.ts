import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordService } from '../password.service';
import { EmailService } from '../email.service';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordStrengthComponent], // Ensure this line includes PasswordStrengthComponent
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
  providers: [PasswordService, EmailService],
})
export class PasswordFormComponent {
  options = {
    length: 12,
    useUppercase: true,
    useLowercase: true,
    useNumbers: true,
    useSymbols: true,
  };
  generatedPassword: string | null = null;

  constructor(
    private passwordService: PasswordService,
    private emailService: EmailService
  ) {}

  generatePassword() {
    this.passwordService
      .generatePassword(this.options)
      .subscribe((response: any) => {
        this.generatedPassword = response.password;
      });
  }

  sendEmail() {
    const email = prompt('Enter your email:');
    const passwordName = prompt('Name your password:');
    this.emailService
      .sendEmail({ email, password: this.generatedPassword, passwordName })
      .subscribe();
  }
}
