import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordService } from '../password.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  passwordCopied = false;
  showEmailForm = false;
  email = '';
  passwordName = '';
  emailSent = false; // Property to show success message

  constructor(
    private passwordService: PasswordService,
    private emailService: EmailService
  ) {}

  generatePassword() {
    this.passwordService
      .generatePassword(this.options)
      .subscribe((response: any) => {
        this.generatedPassword = response.password;
        this.passwordCopied = false;
      });
  }

  copyPassword() {
    if (this.generatedPassword) {
      navigator.clipboard.writeText(this.generatedPassword).then(() => {
        this.passwordCopied = true;
        setTimeout(() => {
          this.passwordCopied = false;
        }, 2000);
      });
    }
  }

  openEmailForm() {
    this.showEmailForm = true;
    this.emailSent = false; // Reset success message when reopening the form
  }

  closeEmailForm() {
    this.showEmailForm = false;
    this.clearEmailForm(); // Clear only the email form fields on cancel
  }

  sendEmail() {
    if (this.email && this.passwordName && this.generatedPassword) {
      console.log('Sending email with data:', {
        email: this.email,
        password: this.generatedPassword,
        passwordName: this.passwordName,
      });

      this.emailService
        .sendEmail({
          email: this.email,
          password: this.generatedPassword,
          passwordName: this.passwordName,
        })
        .subscribe(() => {
          this.emailSent = true; // Show success message
          this.clearEmailForm(); // Clear the email form after sending
        });
    }
  }

  clearEmailForm() {
    // Clear only the email and passwordName fields, keep the generated password
    this.email = '';
    this.passwordName = '';
  }

  // Detect clicks outside the modal and close the modal
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      this.closeEmailForm();
    }
  }
}
