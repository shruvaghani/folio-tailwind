import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Category } from './components/category/category';
import { Highlight } from './components/highlight/highlight';
import { Testimonial } from './components/testimonial/testimonial';
import { Footer5 } from '@app/components/footer/footer5/footer5';

@Component({
  selector: 'app-blog',
  imports: [Hero, Category, Testimonial, Highlight, Footer5],
  templateUrl: './blog.html',
  styles: ``,
})
export class Blog {}
