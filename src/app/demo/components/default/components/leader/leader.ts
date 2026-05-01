import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { clientData } from '../../data';

register();
@Component({
  selector: 'default-leader',
  imports: [],
  templateUrl: './leader.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Leader {
  clientData = clientData;
}
