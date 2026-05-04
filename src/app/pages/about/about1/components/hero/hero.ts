import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { CountUpDirective } from 'ngx-countup';
import { countersData } from '../../data';
import { GlightboxDirective } from "@/app/directive/glightbox.directive";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about1-hero',
  imports: [LucideAngularModule, CountUpDirective, GlightboxDirective, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
  
export class Hero {
  countersData = countersData;
}
