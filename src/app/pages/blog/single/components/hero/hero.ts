import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from "@/app/directive/glightbox.directive";
import { commentData, galleryData, tagData } from '../../data';

@Component({
  selector: 'single-hero',
  imports: [LucideAngularModule, RouterLink, GlightboxDirective],
  templateUrl: './hero.html',
  styles: ``,
})
  
export class Hero {
  galleryData = galleryData;
  tagData = tagData;
  commentData = commentData;
}
