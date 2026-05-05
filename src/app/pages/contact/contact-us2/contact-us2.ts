import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Contact } from "./components/contact/contact";
import { Map } from "./components/map/map";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-contact-us2',
  imports: [Hero, Contact, Map, Footer3],
  templateUrl: './contact-us2.html',
  styles: ``,
})
export class ContactUs2 {

}
