import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { Testimonials } from "./components/testimonials/testimonials";
import { Clients } from "./components/clients/clients";
import { CTA } from "./components/cta/cta";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { Navbar4 } from "@app/components/header/navbar4/navbar4";

@Component({
  selector: 'app-agency',
  imports: [Hero, Features, About, Services, Projects, Skills, Testimonials, Clients, CTA, Footer2, Navbar4],
  templateUrl: './agency.html',
  styles: ``,
})
export class Agency {

}
