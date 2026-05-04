import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { stepsData } from '../../data';

@Component({
  selector: 'saas-work',
  imports: [RouterLink],
  templateUrl: './work.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Work {
  stepsData = stepsData;
}
