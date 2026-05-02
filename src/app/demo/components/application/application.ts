import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { BankDetail } from "./components/bank-detail/bank-detail";
import { Experience } from "./components/experience/experience";
import { Features } from "./components/features/features";
import { Testimonial } from "./components/testimonial/testimonial";
import { BlogSlider } from "./components/blog-slider/blog-slider";
import { Cta } from "./components/cta/cta";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { ClientSlider } from "./components/client-slider/client-slider";

@Component({
  selector: 'app-application',
  imports: [Hero, BankDetail, Experience, Features, Testimonial, BlogSlider, Cta, Footer2, ClientSlider],
  templateUrl: './application.html',
  styles: ``,
})
  
export class Application {

}
