import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { projectInfoData } from '../../data';

@Component({
  selector: 'case-study1-hero',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})

export class Hero {
  projectInfoData = projectInfoData;
}
