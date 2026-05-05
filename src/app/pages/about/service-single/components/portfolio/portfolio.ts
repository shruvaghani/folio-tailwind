import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { caseStudiesData } from '../../data';
register();

@Component({
  selector: 'service-single-portfolio',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './portfolio.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Portfolio {
  caseStudiesData = caseStudiesData;
}
