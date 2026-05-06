import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Grid } from "./components/grid/grid";
import { CTA } from "./components/cta/cta";
import { ProductFeature } from "./components/product-feature/product-feature";
import { Features } from "./components/features/features";
import { ProductFeature2 } from "./components/product-feature2/product-feature2";
import { Testimonial } from "./components/testimonial/testimonial";
import { Newsletter } from "./components/newsletter/newsletter";
import { Footer6 } from "@app/components/footer/footer6/footer6";
import { Navbar7 } from "@app/components/header/navbar7/navbar7";

@Component({
  selector: 'app-product',
  imports: [Hero, Grid, CTA, ProductFeature, Features, ProductFeature2, Testimonial, Newsletter, Footer6, Navbar7],
  templateUrl: './product.html',
  styles: ``, 
})
export class Product {

}
