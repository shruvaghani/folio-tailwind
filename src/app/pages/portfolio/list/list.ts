import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-list',
  imports: [Hero, Portfolio, Footer3],
  templateUrl: './list.html',
  styles: ``,
})

export class List {

}
