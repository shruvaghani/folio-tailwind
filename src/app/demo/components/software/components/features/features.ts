import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { clientLogoData } from '../../data';
import { register } from 'swiper/element/bundle';

register()

@Component({
  selector: 'software-features',
  imports: [LucideAngularModule,SwiperDirective],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class Features {
  clientLogoData = clientLogoData;
}
