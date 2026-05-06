import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { featuresData } from '../../data';

@Component({
  selector: 'case-study1-detail',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './detail.html',
  styles: ``,
})

export class Detail {
  featuresData = featuresData;
}
