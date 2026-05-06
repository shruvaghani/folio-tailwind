import { Component } from '@angular/core';
import { galleryData } from '../../data';
import { GlightboxDirective } from "@/app/directive/glightbox.directive";

@Component({
  selector: 'case-study1-portfolio',
  imports: [GlightboxDirective],
  templateUrl: './portfolio.html',
  styles: ``,
})
export class Portfolio {
  galleryData = galleryData;
}
