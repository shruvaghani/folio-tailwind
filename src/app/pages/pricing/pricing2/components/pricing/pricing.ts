import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { featuresData } from '../../data';

@Component({
  selector: 'pricing2-pricing',
  imports: [LucideAngularModule],
  templateUrl: './pricing.html',
  styles: ``,
})

export class Pricing {
  featuresData = featuresData;
}
