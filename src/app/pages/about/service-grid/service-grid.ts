import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Service } from './components/service/service';
import { Faq } from './components/faq/faq';
import { Contact } from './components/contact/contact';
import { Footer3 } from '@app/components/footer/footer3/footer3';
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-service-grid',
  imports: [Hero, Service, Faq, Contact, Footer3, Navbar1],
  templateUrl: './service-grid.html',
  styles: ``,
})
export class ServiceGrid {}
