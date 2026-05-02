import { Component } from '@angular/core';
import { counterData } from '../../data';
import { CountUpDirective } from "ngx-countup";

@Component({
  selector: 'agency-skills',
  imports: [CountUpDirective],
  templateUrl: './skills.html',
  styles: ``,
})
export class Skills {
  counterData = counterData;
}
