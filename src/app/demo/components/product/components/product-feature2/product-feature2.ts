import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { watchFeatureData } from '../../data';

@Component({
  selector: 'product-product-feature2',
  imports: [LucideAngularModule],
  templateUrl: './product-feature2.html',
  styles: ``,
})
export class ProductFeature2 {
  watchFeatureData = watchFeatureData;
}
