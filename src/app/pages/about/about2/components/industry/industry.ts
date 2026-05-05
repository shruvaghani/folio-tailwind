import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { avatarsData, testimonialsData } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'about2-industry',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './industry.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Industry {
  avatarsData = avatarsData;
  testimonialsData = testimonialsData;
}
