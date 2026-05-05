import { Component } from '@angular/core';
import { stepsData } from '../../data';

@Component({
  selector: 'career-single-process',
  imports: [],
  templateUrl: './process.html',
  styles: ``,
})
export class Process {
  stepsData = stepsData;
}
