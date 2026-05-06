import { Component } from '@angular/core';
import { statsData } from '../../data';

@Component({
  selector: 'case-study1-result',
  imports: [],
  templateUrl: './result.html',
  styles: ``,
})

export class Result {
  statsData = statsData;
}
