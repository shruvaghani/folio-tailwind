import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { screenData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'application-testimonial',
  imports: [RouterLink],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Testimonial {
  screenData = screenData;
}
