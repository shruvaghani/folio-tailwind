import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element';
import { featureSlidesData } from '../../data';
register();

@Component({
  selector: 'product-features',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Features {
  featureSlidesData = featureSlidesData;
}
