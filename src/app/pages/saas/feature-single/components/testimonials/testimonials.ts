import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'feature-single-testimonials',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './testimonials.html',
  styles: ``,
})
  
export class Testimonials {}
