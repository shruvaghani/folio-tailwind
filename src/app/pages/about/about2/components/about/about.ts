import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { awardsData } from '../../data';

@Component({
  selector: 'about2-about',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './about.html',
  styles: ``,
})
  
export class About {
  awardsData = awardsData;
}
