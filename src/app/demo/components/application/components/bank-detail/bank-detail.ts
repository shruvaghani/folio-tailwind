import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { phaseSlidesData, stepSlidesData } from '../../data';

register();

@Component({
  selector: 'application-bank-detail',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './bank-detail.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class BankDetail {
  stepSlidesData = stepSlidesData;
  phaseSlidesData = phaseSlidesData;
}
