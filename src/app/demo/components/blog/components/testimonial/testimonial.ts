import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { teamData } from '../../data';

@Component({
  selector: 'blog-testimonial',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonial {
  teamData = teamData;
}
