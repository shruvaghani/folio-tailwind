import { Component } from '@angular/core';
import { awardsData } from '../../data';

@Component({
  selector: 'agency-cta',
  imports: [],
  templateUrl: './cta.html',
  styles: ``,
})
export class CTA {
 awardsData = awardsData;
}
