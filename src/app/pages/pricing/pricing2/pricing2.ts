import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Pricing } from './components/pricing/pricing';
import { Faq } from './components/faq/faq';
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-pricing2',
  imports: [Hero, Pricing, Faq, Footer3],
  templateUrl: './pricing2.html',
  styles: ``,
})
export class Pricing2 {}
