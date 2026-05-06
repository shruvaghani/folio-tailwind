import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-modern',
  imports: [Hero, Portfolio, Footer3, Navbar1],
  templateUrl: './modern.html',
  styles: ``,
})
export class Modern {

}
