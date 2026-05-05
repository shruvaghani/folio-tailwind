import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { accordionData, clientIconsData, featuresData } from '../../data';

@Component({
  selector: 'career-single-keybenefits',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './keybenefits.html',
  styles: ``,
})
export class Keybenefits {
  featuresData = featuresData;
  accordionData = accordionData;
  clientIconsData = clientIconsData;
}
