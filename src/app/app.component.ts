import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PasswordFormComponent } from './password-form/password-form.component';
import { RandomFactsComponent } from './random-facts/random-facts.component';
import { TrustedByComponent } from './trusted-by/trusted-by.component';
import { LandingPageComponent } from './landing-page/landing-page.component'; // Import the LandingPageComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    PasswordFormComponent,
    RandomFactsComponent,
    TrustedByComponent,
    LandingPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-generator';
}
