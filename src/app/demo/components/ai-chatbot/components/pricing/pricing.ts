import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { testimonialsData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'ai-chatbot-pricing',
  imports: [LucideAngularModule],
  templateUrl: './pricing.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Pricing {
  testimonialsData = testimonialsData;
}
