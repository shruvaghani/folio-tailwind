import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { portfolioData } from '../../data';

@Component({
  selector: 'default-project',
  imports: [RouterLink],
  templateUrl: './project.html',
  styles: ``,
})
  
export class Project {
  portfolioData = portfolioData;
}
