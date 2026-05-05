import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { contactInfoData, socialData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact-us2-contact',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './contact.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Contact {
  socialData = socialData;
  contactInfoData = contactInfoData;
}
