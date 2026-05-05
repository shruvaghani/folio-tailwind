import { Component } from '@angular/core';
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Job } from "./components/job/job";
import { Hero } from "./components/hero/hero";

@Component({
  selector: 'app-career-single',
  imports: [Footer3, Job, Hero],
  templateUrl: './career-single.html',
  styles: ``,
})
export class CareerSingle {

}
