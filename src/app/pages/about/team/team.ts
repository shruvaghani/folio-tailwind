import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Experts } from "./components/experts/experts";
import { Portfolio } from "./components/portfolio/portfolio";
import { Cta } from "./components/cta/cta";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-team',
  imports: [Hero, Experts, Portfolio, Cta, Footer3, Navbar1],
  templateUrl: './team.html',
  styles: ``,
})
export class Team {

}
