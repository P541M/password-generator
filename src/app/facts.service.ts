import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-facts',
  templateUrl: './random-facts.component.html',
  styleUrls: ['./random-facts.component.css'],
})
export class RandomFactsComponent implements OnInit {
  facts: string[] = [
    'The average person uses the same password for multiple accounts.',
    'Using a password manager can help keep your accounts secure.',
    'A strong password should include uppercase, lowercase, numbers, and symbols.',
    'Avoid using easily guessable information like your birthdate as your password.',
  ]; // Defined directly in the component

  ngOnInit() {
    // If you need to perform any additional logic, you can do so here
  }
}
