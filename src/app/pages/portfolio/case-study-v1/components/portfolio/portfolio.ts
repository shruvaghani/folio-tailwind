import { Component } from '@angular/core';
import { galleryData } from '../../data';

@Component({
  selector: 'case-study1-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styles: ``,
})
export class Portfolio {
  galleryData = galleryData;
}
