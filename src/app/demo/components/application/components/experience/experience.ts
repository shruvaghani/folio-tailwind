import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { statsData } from '../../data';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'application-experience',
  imports: [LucideAngularModule, CommonModule, CountUpDirective],
  templateUrl: './experience.html',
  styles: ``,
})
  
export class Experience {
  statsData = statsData;
}
