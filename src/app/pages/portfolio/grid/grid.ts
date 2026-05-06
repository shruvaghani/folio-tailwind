import { Component } from '@angular/core';
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Hero } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { Cta } from "./components/cta/cta";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-grid',
  imports: [Footer3, Hero, Portfolio, Cta, Navbar1],
  templateUrl: './grid.html',
  styles: ``,
})

export class Grid {

}
