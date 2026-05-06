import { Component } from '@angular/core';
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Hero } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-grid',
  imports: [Footer3, Hero, Portfolio, Cta],
  templateUrl: './grid.html',
  styles: ``,
})

export class Grid {

}
