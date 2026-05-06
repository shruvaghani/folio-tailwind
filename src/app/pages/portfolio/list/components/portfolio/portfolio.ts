import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { portfolioListData } from '../../data';

@Component({
  selector: 'portfolio-list-portfolio',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './portfolio.html',
  styles: ``,
})

export class Portfolio {
  portfolioListData = portfolioListData;
}
