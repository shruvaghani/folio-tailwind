import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { featuresData, FeatureType } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ai-chatbot-workflow',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './workflow.html',
  styles: ``,
})
export class Workflow {
  featuresData: (FeatureType & { safeIcon: SafeHtml })[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.featuresData = featuresData.map((item) => ({
      ...item,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }
}
