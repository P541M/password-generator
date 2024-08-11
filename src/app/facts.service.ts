import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  private facts: string[] = [
    'Using a password manager can help keep your accounts secure.',
    'A strong password should include uppercase, lowercase, numbers, and symbols.',
    'Avoid using easily guessable information like your birthdate as your password.',
    'Passwords should be at least 12 characters long for better security.',
    'Using a combination of unrelated words can make a strong password.',
    'Changing your passwords regularly can reduce the risk of hacking.',
    'Multi-factor authentication adds an extra layer of security.',
    'Avoid using the same password across multiple websites.',
    'Phishing attacks often target weak passwords.',
    'The most common password in the world is "123456".',
    'Nearly 23 million account holders use "123456" as their password.',
    'About 45% of people reuse their passwords across multiple sites.',
    'In 2020, over 80% of hacking-related breaches involved weak or stolen passwords.',
    'The average person has over 90 online accounts that require a password.',
    'Around 21% of people use passwords that are over 10 years old.',
    'It takes just 10 minutes to crack a lowercase password that is six characters long.',
    'Over 50% of people use simple and easy-to-guess passwords like "password" or "12345678".',
    'Only 35% of users change their passwords regularly.',
  ];

  getFacts(): string[] {
    return this.facts;
  }
}
