import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Leader } from "./components/leader/leader";
import { Offer } from "./components/offer/offer";
import { Process } from "./components/process/process";
import { Project } from "./components/project/project";
import { Testimonial } from "./components/testimonial/testimonial";
import { Subscribe } from "./components/subscribe/subscribe";
import { Blog } from "./components/blog/blog";
import { Footer1 } from "../../../components/footer/footer1/footer1";

@Component({
  selector: 'app-default',
  imports: [Hero, Leader, Offer, Process, Project, Testimonial, Subscribe, Blog, Footer1],
  templateUrl: './default.html',
  styles: ``,
})
  
export class Default {

}
