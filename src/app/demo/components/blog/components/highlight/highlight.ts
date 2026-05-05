import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { blogHighlightData } from '../../data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

register();
@Component({
  selector: 'blog-highlight',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './highlight.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Highlight {
  blogHighlightData = blogHighlightData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
