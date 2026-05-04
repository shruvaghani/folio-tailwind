import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { avatarsData } from '../../data';

@Component({
  selector: 'saas-integrations',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './integrations.html',
  styles: ``,
})
  
export class Integrations {
  avatarsData = avatarsData;
}
