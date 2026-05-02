import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-footer2',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './footer2.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Footer2 {

footerData = [
  {
    title: 'Company',
    links: [
      { label: 'About us', url: '/about/v1' },
      { label: 'Contact us', url: '/contact-us' },
      { label: 'Career', url: '/career', badge: '2 job', badgeClass: 'bg-primary ms-2' },
      { label: 'Career detail', url: '/career/single' },
      { label: 'Become a partner', url: '/contact-us/v2' },
      { label: 'Services', url: '/service/v1' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case studies', url: '/portfolio/case-study/v1' },
      { label: 'Pricing', url: '/pricing/v1', badge: 'New', badgeClass: 'bg-success ms-1' },
      { label: 'Blogs', url: '/blog/minimal' },
      { label: 'Blog detail', url: '/blog/single' },
      { label: 'Success stories', url: '/contact-us/v2' },
      { label: 'Services', url: '/service/v1', external: true}
    ]
  }
];
}
