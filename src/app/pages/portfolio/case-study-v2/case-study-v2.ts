import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Action } from "./components/action/action";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-case-study-v2',
  imports: [Hero, Action, Footer3],
  templateUrl: './case-study-v2.html',
  styles: ``,
})
  
export class CaseStudyV2 {

}
