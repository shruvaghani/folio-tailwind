import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { filtersData, portfolioData } from '../../data';

@Component({
  selector: 'portfolio-grid-portfolio',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './portfolio.html',
  styles: ``,
})

export class Portfolio {
  portfolioData = portfolioData;
  filtersData = filtersData;

  activeFilter: string = 'all';
  setFilter(value: string) {
    this.activeFilter = value;
  }
}
