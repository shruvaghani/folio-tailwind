import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { featuresData } from '../../data';

@Component({
  selector: 'agency-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
export class Features {
featuresData: any[] = [];

constructor(private sanitizer: DomSanitizer) {}

ngOnInit() {
  this.featuresData = featuresData.map(item => ({
    ...item,
    icon: this.sanitizer.bypassSecurityTrustHtml(item.icon)
  }));
}
}
