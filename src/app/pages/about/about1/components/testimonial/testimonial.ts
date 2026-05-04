import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { teamMembersData } from '../../data';

@Component({
  selector: 'about1-testimonial',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './testimonial.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Testimonial {
  teamMembersData = teamMembersData;
}
