import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { portfolioGridData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'modern-portfolio',
  imports: [LucideAngularModule, RouterLink,CommonModule],
  templateUrl: './portfolio.html',
  styles: ``,
})

export class Portfolio {
  portfolioGridData = portfolioGridData;
}
