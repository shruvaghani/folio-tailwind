import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { pricingPlanData } from '../../data';

@Component({
  selector: 'software-cta',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './cta.html',
  styles: ``,
})
export class Cta {
  pricingPlanData = pricingPlanData;
}
