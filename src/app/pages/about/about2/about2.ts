import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Clients } from "./components/clients/clients";
import { About } from "./components/about/about";
import { Testimonial } from "./components/testimonial/testimonial";
import { Industry } from "./components/industry/industry";
import { Cta } from "./components/cta/cta";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-about2',
  imports: [Hero, Clients, About, Testimonial, Industry, Cta, Footer3],
  templateUrl: './about2.html',
  styles: ``,
})
export class About2 {

}
