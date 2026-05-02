import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Principles } from "./components/principles/principles";
import { Industries } from "./components/industries/industries";
import { Team } from "./components/team/team";
import { Clients } from "./components/clients/clients";
import { Guidance } from "./components/guidance/guidance";

@Component({
  selector: 'app-finance',
  imports: [Hero, About, Services, Principles, Industries, Team, Clients, Guidance],
  templateUrl: './finance.html',
  styles: ``,
})
  
export class Finance {

}
