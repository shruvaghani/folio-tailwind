import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { About } from "./components/about/about";
import { Work } from "./components/work/work";
import { Performance } from "./components/performance/performance";
import { Pricing } from "./components/pricing/pricing";
import { Blog } from "./components/blog/blog";
import { Integrations } from "./components/integrations/integrations";
import { Footer7 } from "@app/components/footer/footer7/footer7";

@Component({
  selector: 'app-saas',
  imports: [Hero, Features, About, Work, Performance, Pricing, Blog, Integrations, Footer7],
  templateUrl: './saas.html',
  styles: ``,
})
export class Saas {

}
