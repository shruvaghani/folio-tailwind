import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { financeServicesData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'finance-industries',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './industries.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Industries {
  financeServicesData = financeServicesData;
}
