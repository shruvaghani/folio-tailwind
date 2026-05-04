import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { footerData, socialData } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer3',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './footer3.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Footer3 {
  footerData = footerData;
  socialData = socialData;
}
