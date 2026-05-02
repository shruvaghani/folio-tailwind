import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { testimonialsData } from '../../data';

@Component({
  selector: 'software-testimonials',
  imports: [LucideAngularModule, RouterLink, SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonials {
  testimonialsData = testimonialsData;

  getStars(rating: number): number[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rating) ? 1 : i === Math.ceil(rating) && rating % 1 !== 0 ? 0.5 : 0,
      );
    }
    return stars;
  }
}
