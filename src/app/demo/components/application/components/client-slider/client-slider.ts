import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { avatarListData, testimonialCardsData } from '../../data';

register();

@Component({
  selector: 'application-client-slider',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './client-slider.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class ClientSlider {
  avatarListData = avatarListData;
  testimonialCardsData = testimonialCardsData;
  Math = Math;
}
