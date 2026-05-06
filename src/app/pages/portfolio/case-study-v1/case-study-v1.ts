import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Detail } from "./components/detail/detail";
import { Portfolio } from "./components/portfolio/portfolio";
import { Result } from "./components/result/result";
import { ReletedWork } from "./components/releted-work/releted-work";
import { Cta } from "./components/cta/cta";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-case-study-v1',
  imports: [Hero, Detail, Portfolio, Result, ReletedWork, Cta, Footer3],
  templateUrl: './case-study-v1.html',
  styles: ``,
})
export class CaseStudyV1 {

}
