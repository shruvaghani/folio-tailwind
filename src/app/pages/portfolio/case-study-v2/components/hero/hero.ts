import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { featureListData, projectInfoData, statsData } from '../../data';

@Component({
  selector: 'case-study-v2-hero',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
})
  
export class Hero {
  projectInfoData = projectInfoData;
  featureListData = featureListData;
  statsData = statsData;
}
