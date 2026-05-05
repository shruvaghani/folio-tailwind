import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { clientLogoData, pricingTable } from '../../data';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'pricing1-compare',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './compare.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Compare {
  table = pricingTable;
  clientLogoData = clientLogoData;
}
