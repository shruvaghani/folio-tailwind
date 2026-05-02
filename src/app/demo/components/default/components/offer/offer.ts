import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { serviceData, ServiceType } from '../../data';
import { LucideAngularModule } from "lucide-angular";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'default-offer',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './offer.html',
  styles: ``,
})
  
export class Offer {
  serviceData: (ServiceType & { safeIcon: SafeHtml })[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.serviceData = serviceData.map((item) => ({
      ...item,
      safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon),
    }));
  }
}
