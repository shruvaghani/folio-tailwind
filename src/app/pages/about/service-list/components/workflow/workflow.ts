import { Component } from '@angular/core';
import { processData } from '../../data';

@Component({
  selector: 'service-list-workflow',
  imports: [],
  templateUrl: './workflow.html',
  styles: ``,
})
export class Workflow {
  processData = processData;
}
