import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { filterData, integrationData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'integration-integrations',
  imports: [LucideAngularModule, RouterLink, CommonModule],
  templateUrl: './integrations.html',
  styles: ``,
})
  
export class Integrations {
  integrationData = integrationData;
  filterData = filterData;
}
