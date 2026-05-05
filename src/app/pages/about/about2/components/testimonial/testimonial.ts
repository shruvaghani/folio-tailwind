import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { historyData } from '../../data';
import { LucideAngularModule } from "lucide-angular";

register();
@Component({
  selector: 'about2-testimonial',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonial {
  historyData = historyData;
}
