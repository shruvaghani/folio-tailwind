import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { footerData, socialLinkData } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer1',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './footer1.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Footer1 {
  footerData = footerData;
  socialLinkData = socialLinkData;
}
