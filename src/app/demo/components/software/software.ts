import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { Client } from "./components/client/client";
import { Services } from "./components/services/services";
import { Testimonials } from "./components/testimonials/testimonials";
import { Cta } from "./components/cta/cta";
import { Faq } from "./components/faq/faq";
import { Method } from "./components/method/method";
import { Subscribe } from "./components/subscribe/subscribe";

@Component({
  selector: 'app-software',
  imports: [Hero, Features, Client, Services, Testimonials, Cta, Faq, Method, Subscribe],
  templateUrl: './software.html',
  styles: ``,
})
export class Software {

}
