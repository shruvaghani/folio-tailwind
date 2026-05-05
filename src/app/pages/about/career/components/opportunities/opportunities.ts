import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { jobsData } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'career-opportunities',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './opportunities.html',
  styles: ``,
})
  
export class Opportunities {
  jobsData = jobsData;
}
