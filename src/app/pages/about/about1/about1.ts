import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Testimonial } from "./components/testimonial/testimonial";
import { About } from "./components/about/about";
import { Clients } from "./components/clients/clients";
import { Companies } from "./components/companies/companies";
import { Cta } from "./components/cta/cta";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-about1',
  imports: [Hero, Testimonial, About, Clients, Companies, Cta, Footer3, Navbar1],
  templateUrl: './about1.html',
  styles: ``,
})
  
export class About1 {

}
