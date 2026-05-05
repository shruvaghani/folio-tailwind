import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { processTabsData, tabNavData } from '../../data';

@Component({
  selector: 'career-process',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './process.html',
  styles: ``,
})
  
export class Process {
  processTabsData = processTabsData;
  tabNavData = tabNavData;
}
