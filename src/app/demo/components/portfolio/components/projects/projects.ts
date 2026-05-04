import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { portfolioData } from '../../data';

@Component({
  selector: 'portfolio-projects',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './projects.html',
  styles: ``,
})
export class Projects {
portfolioData = portfolioData;
}
