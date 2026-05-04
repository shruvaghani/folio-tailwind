import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { featuredBlogData } from '../../data';

@Component({
  selector: 'blog-hero',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  featuredBlogData = featuredBlogData;
}
