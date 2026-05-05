import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { testimonialsData } from '../../data';
import { register } from 'swiper/element/bundle';

register()

@Component({
  selector: 'service-single-testimonials',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class Testimonials {
  testimonialsData = testimonialsData;
  getStars(rating: number) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    return {
      full: Array(fullStars),
      half: hasHalf,
    };
  }
}
