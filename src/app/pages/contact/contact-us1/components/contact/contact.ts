import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { contactCardsData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact-us1-contact',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './contact.html',
  styles: ``,
})
  
export class Contact {
  contactCardsData = contactCardsData;
}
