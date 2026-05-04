import { Component } from '@angular/core';
import { statsData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ai-chatbot-insights',
  imports: [CommonModule],
  templateUrl: './insights.html',
  styles: ``,
})
  
export class Insights {
  statsData = statsData;
}
