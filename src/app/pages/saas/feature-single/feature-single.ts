import { Component } from '@angular/core';
import { Testimonials } from "./components/testimonials/testimonials";
import { Hero } from "./components/hero/hero";
import { Analysis } from "./components/analysis/analysis";
import { Faq } from "./components/faq/faq";
import { Footer4 } from "@app/components/footer/footer4/footer4";

@Component({
  selector: 'app-feature-single',
  imports: [Testimonials, Hero, Analysis, Faq, Footer4],
  templateUrl: './feature-single.html',
  styles: ``,
})
  
export class FeatureSingle {

}
