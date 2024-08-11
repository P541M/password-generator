import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  private facts = [
    'Passwords should be at least 12 characters long.',
    'Avoid using common words or phrases.',
    'Using a passphrase is often more secure than a single word.',
    // Add more facts as needed
  ];

  getRandomFact() {
    const index = Math.floor(Math.random() * this.facts.length);
    return this.facts[index];
  }
}
