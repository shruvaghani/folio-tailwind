import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { DevelopTip } from "./components/develop-tip/develop-tip";
import { Cta } from "./components/cta/cta";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { About } from "./components/about/about";

@Component({
  selector: 'app-portfolio',
  imports: [Hero, Projects, DevelopTip, Cta, Footer2, About],
  templateUrl: './portfolio.html',
  styles: ``,
})
export class Portfolio {

}
