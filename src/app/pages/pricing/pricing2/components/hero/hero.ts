import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { plansData } from '../../data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'pricing2-hero',
  imports: [LucideAngularModule, RouterLink, CommonModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  plansData = plansData;
  topPlans = this.plansData.slice(0, 2);
  bottomPlans = this.plansData.slice(2);
}
