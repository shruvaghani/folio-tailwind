import { Component } from '@angular/core';
import { Testimonials } from "./components/testimonials/testimonials";
import { Hero } from "./components/hero/hero";
import { Analysis } from "./components/analysis/analysis";
import { Faq } from "./components/faq/faq";
import { Footer4 } from "@app/components/footer/footer4/footer4";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-feature-single',
  imports: [Testimonials, Hero, Analysis, Faq, Footer4, Navbar1],
  templateUrl: './feature-single.html',
  styles: ``,
})
  
export class FeatureSingle {

}
