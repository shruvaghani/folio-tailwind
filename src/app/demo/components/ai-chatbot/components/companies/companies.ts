import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { clientLogoData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'ai-chatbot-companies',
  imports: [],
  templateUrl: './companies.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Companies {
  clientLogoData = clientLogoData;
}
