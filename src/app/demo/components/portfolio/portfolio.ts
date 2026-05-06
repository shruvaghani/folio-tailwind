import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { DevelopTip } from "./components/develop-tip/develop-tip";
import { Cta } from "./components/cta/cta";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { About } from "./components/about/about";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-portfolio',
  imports: [Hero, Projects, DevelopTip, Cta, Footer2, About, Navbar1],
  templateUrl: './portfolio.html',
  styles: ``,
})
export class Portfolio {

}
