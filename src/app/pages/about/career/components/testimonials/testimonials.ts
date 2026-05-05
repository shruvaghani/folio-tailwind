import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { testimonialData } from '../../data';

register();

@Component({
  selector: 'career-testimonials',
  imports: [LucideAngularModule],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonials {
  testimonialData = testimonialData;
}
