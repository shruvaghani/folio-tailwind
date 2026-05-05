import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { featureList } from '../../data';

@Component({
  selector: 'service-list-integrate',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './integrate.html',
  styles: ``,
})
export class Integrate {
  featureList = featureList;
}
