import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Pricing } from './components/pricing/pricing';
import { Faq } from './components/faq/faq';
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-pricing2',
  imports: [Hero, Pricing, Faq, Footer3, Navbar1],
  templateUrl: './pricing2.html',
  styles: ``,
})
export class Pricing2 {}
