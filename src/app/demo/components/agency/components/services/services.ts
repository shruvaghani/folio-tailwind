import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { clientIconsData, servicesData } from '../../data';

@Component({
  selector: 'agency-services',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './services.html',
  styles: ``,
})
export class Services {
  clientIconsData = clientIconsData;
  servicesData = servicesData;
}
