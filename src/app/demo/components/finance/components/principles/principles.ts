import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { valuesData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'finance-principles',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './principles.html',
  styles: ``,
})
  
export class Principles {
  valuesData = valuesData;
}
