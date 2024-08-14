import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsService } from '../facts.service'; // Import the service

@Component({
  selector: 'app-random-facts',
  templateUrl: './random-facts.component.html',
  styleUrls: ['./random-facts.component.css'],
  standalone: true,
  imports: [CommonModule], // Import CommonModule to use *ngFor and other common directives
})
export class RandomFactsComponent implements OnInit {
  facts: string[] = [];
  currentFact: string = ''; // Holds the current fact being displayed

  constructor(private factsService: FactsService) {}

  ngOnInit() {
    this.facts = this.factsService.getFacts(); // Get the facts from the service
    this.showRandomFact(); // Show a random fact on init

    // Only start the interval if we're running on the client side
    if (typeof window !== 'undefined') {
      this.switchFact();
    }
  }

  showRandomFact() {
    const randomIndex = Math.floor(Math.random() * this.facts.length);
    this.currentFact = this.facts[randomIndex];
  }

  switchFact() {
    setInterval(() => {
      this.showRandomFact(); // Pick a random fact each time
    }, 7000); // Switch fact every 7 seconds
  }
}
