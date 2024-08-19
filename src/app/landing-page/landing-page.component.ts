import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  scrollToPasswordForm() {
    const passwordFormSection = document.querySelector('app-password-form');
    if (passwordFormSection) {
      passwordFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
