import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Compare } from "./components/compare/compare";
import { Faq } from "./components/faq/faq";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-pricing1',
  imports: [Hero, Compare, Faq, Footer3],
  templateUrl: './pricing1.html',
  styles: ``,
})
export class Pricing1 {

}
