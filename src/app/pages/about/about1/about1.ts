import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Testimonial } from "./components/testimonial/testimonial";
import { About } from "./components/about/about";
import { Clients } from "./components/clients/clients";
import { Companies } from "./components/companies/companies";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-about1',
  imports: [Hero, Testimonial, About, Clients, Companies, Cta],
  templateUrl: './about1.html',
  styles: ``,
})
  
export class About1 {

}
