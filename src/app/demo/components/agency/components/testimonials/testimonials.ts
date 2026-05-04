import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialsData } from '../../data';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'agency-testimonials',
  imports: [LucideAngularModule],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonials {
  testimonialsData = testimonialsData;
  Math = Math;
}
