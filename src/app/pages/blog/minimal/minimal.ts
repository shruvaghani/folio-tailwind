import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Blog } from "./components/blog/blog";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-minimal',
  imports: [Hero, Blog, Footer3],
  templateUrl: './minimal.html',
  styles: ``,
})
export class Minimal {

}
