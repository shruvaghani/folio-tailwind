import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { footer6Data, socialData } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer6',
  imports: [LucideAngularModule, RouterLink,CommonModule],
  templateUrl: './footer6.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer6 {
  footer6Data = footer6Data;
   socialData = socialData;
}
