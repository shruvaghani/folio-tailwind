import { Component } from '@angular/core';
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Hero } from "./components/hero/hero";
import { Workflow } from "./components/workflow/workflow";
import { Integrate } from "./components/integrate/integrate";
import { Contact } from "./components/contact/contact";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-service-list',
  imports: [Footer3, Hero, Workflow, Integrate, Contact, Navbar1],
  templateUrl: './service-list.html',
  styles: ``,
})
export class ServiceList {

}
