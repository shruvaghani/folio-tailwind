import { GlightboxDirective } from '@/app/directive/glightbox.directive';
import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { CountUpDirective } from 'ngx-countup';
import { counterData } from '../../data';

@Component({
  selector: 'team-portfolio',
  imports: [LucideAngularModule, CountUpDirective, GlightboxDirective],
  templateUrl: './portfolio.html',
  styles: ``,
})
  
export class Portfolio {
  counterData = counterData;
}