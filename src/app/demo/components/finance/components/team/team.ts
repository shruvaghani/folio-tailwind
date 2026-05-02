import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { teamData } from '../../data';

@Component({
  selector: 'finance-team',
  imports: [LucideAngularModule],
  templateUrl: './team.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Team {
  teamData = teamData;
}
