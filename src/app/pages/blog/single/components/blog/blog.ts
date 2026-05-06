import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { blogSliderData } from '../../data';

register();

@Component({
  selector: 'single-blog',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './blog.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Blog {
  blogSliderData = blogSliderData;
}
