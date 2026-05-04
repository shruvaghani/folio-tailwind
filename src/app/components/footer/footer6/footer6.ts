import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { footerData, socialData } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer6',
  imports: [LucideAngularModule, RouterLink,CommonModule],
  templateUrl: './footer6.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer6 {
  footerData = footerData;
   socialData = socialData;
}
