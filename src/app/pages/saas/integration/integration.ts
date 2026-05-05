import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Integrations } from "./components/integrations/integrations";
import { Cta } from "./components/cta/cta";
import { Footer4 } from "@app/components/footer/footer4/footer4";

@Component({
  selector: 'app-integration',
  imports: [Hero, Integrations, Cta, Footer4],
  templateUrl: './integration.html',
  styles: ``,
})
export class Integration {

}
