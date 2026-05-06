import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Blog } from "./components/blog/blog";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";

@Component({
  selector: 'app-minimal',
  imports: [Hero, Blog, Footer3, Navbar1],
  templateUrl: './minimal.html',
  styles: ``,
})
export class Minimal {

}
