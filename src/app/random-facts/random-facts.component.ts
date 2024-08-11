import { Component, OnInit } from '@angular/core';
import { FactsService } from '../services/facts.service';

@Component({
  selector: 'app-random-facts',
  template: `
    <div>
      <h3>Did You Know?</h3>
      <p>{{ fact }}</p>
    </div>
  `,
})
export class RandomFactsComponent implements OnInit {
  fact: string | null = '';

  constructor(private factsService: FactsService) {}

  ngOnInit() {
    this.fact = this.factsService.getRandomFact();
  }
}
