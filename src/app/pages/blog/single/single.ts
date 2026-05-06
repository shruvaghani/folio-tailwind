import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Blog } from "./components/blog/blog";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-single',
  imports: [Hero, Blog, Footer3],
  templateUrl: './single.html',
  styles: ``,
})
  
export class Single {

}
