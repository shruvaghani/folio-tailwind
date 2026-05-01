import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { countersData, faqsData } from '../../data';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'default-process',
  imports: [LucideAngularModule, CommonModule, CountUpDirective],
  templateUrl: './process.html',
  styles: ``,
})
  
export class Process {
  faqsData = faqsData;
  countersData = countersData;
}