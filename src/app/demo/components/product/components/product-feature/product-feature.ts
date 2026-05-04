import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { featuresData } from '../../data';

@Component({
  selector: 'product-product-feature',
  imports: [],
  templateUrl: './product-feature.html',
  styles: ``,
})
export class ProductFeature {
  featuresData = featuresData;

  constructor(private sanitizer: DomSanitizer) {}

  getIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
