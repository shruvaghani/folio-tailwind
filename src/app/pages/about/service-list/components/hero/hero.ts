import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { servicesData } from '../../data';

@Component({
  selector: 'service-list-hero',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  servicesData = servicesData;
}
