import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { portfolioData } from '../../data';
register();

@Component({
  selector: 'agency-projects',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './projects.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Projects {
  portfolioData = portfolioData;
}
