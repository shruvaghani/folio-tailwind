import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { SwiperOptions } from 'swiper/types';
import { clientLogoData } from '../../data';


@Component({
  selector: 'software-features',
  imports: [LucideAngularModule,SwiperDirective],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class Features {
  clientLogoData = clientLogoData;

  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 4 },
      '1200': { slidesPerView: 6 },
      '1400': { slidesPerView: 8 },
    },
  };
}
