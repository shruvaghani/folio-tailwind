import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { serviceLinksData } from '../../data';

@Component({
  selector: 'finance-services',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './services.html',
  styles: ``,
})
  
export class Services {
  serviceLinksData = serviceLinksData;
}
