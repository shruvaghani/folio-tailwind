import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterLink } from '@angular/router';
import { portfolioSlidesData } from '../../data';

register();

@Component({
  selector: 'case-study1-releted-work',
  imports: [RouterLink],
  templateUrl: './releted-work.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReletedWork {
  portfolioSlidesData = portfolioSlidesData;
}
