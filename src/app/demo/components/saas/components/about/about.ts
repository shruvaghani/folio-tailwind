import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { featuresData } from '../../data';

@Component({
  selector: 'saas-about',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './about.html',
  styles: ``,
})
  
export class About {
  featuresData = featuresData;
}
