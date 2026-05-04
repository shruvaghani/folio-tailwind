import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialsData } from '../../data';

register();
@Component({
  selector: 'product-testimonial',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonial {
  testimonialsData = testimonialsData;
  getStars(rating: number) {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return { full, half };
  }
}
