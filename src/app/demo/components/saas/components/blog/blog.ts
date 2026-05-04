import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { blogData } from '../../data';

register();

@Component({
  selector: 'saas-blog',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './blog.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Blog {
  blogData = blogData;
}
