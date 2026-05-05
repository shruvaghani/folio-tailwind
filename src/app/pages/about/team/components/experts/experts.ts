import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { teamData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'team-experts',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './experts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Experts {
  teamData = teamData;
}
