import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { pricingContentData } from '../../data';

@Component({
  selector: 'saas-pricing',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
})
  
export class Pricing {
  pricingContentData = pricingContentData;
}
