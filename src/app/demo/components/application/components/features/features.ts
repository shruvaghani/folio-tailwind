import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { featureData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'application-features',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './features.html',
  styles: ``,
})
  
export class Features {
  featureData = featureData;
}
