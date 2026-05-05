import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Process } from "./components/process/process";
import { Office } from "./components/office/office";
import { Opportunities } from "./components/opportunities/opportunities";
import { Testimonials } from "./components/testimonials/testimonials";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-career',
  imports: [Hero, Process, Office, Opportunities, Testimonials, Footer3],
  templateUrl: './career.html',
  styles: ``,
})
export class Career {

}
