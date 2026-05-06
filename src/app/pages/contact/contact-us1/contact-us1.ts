import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Contact } from "./components/contact/contact";
import { Form } from "./components/form/form";
import { Map } from "./components/map/map";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-contact-us1',
  imports: [Hero, Contact, Form, Map, Footer3, Navbar1],
  templateUrl: './contact-us1.html',
  styles: ``,
})
  
export class ContactUs1 {

}
