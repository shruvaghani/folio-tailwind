import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { CountUpDirective } from 'ngx-countup';
import { counterData } from '../../data';

@Component({
  selector: 'portfolio-about',
  imports: [RouterLink, LucideAngularModule, CountUpDirective],
  templateUrl: './about.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class About {
  counterData = counterData;
}
