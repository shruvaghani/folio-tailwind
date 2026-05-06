import { Component } from '@angular/core';
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Hero } from "./components/hero/hero";
import { Process } from "./components/process/process";
import { Keybenefits } from "./components/keybenefits/keybenefits";
import { Portfolio } from "./components/portfolio/portfolio";
import { Pricing } from "./components/pricing/pricing";
import { Testimonials } from "./components/testimonials/testimonials";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-service-single',
  imports: [Footer3, Hero, Process, Keybenefits, Portfolio, Pricing, Testimonials, Navbar1],
  templateUrl: './service-single.html',
  styles: ``,
})
export class ServiceSingle {

}
