import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { testimonialsData } from '../../data';

register();

@Component({
  selector: 'feature-single-testimonials',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonials {
  testimonialsData = testimonialsData;
  Math = Math;
}
