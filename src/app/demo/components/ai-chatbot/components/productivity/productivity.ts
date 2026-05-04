import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { accordionData } from '../../data';

@Component({
  selector: 'ai-chatbot-productivity',
  imports: [LucideAngularModule],
  templateUrl: './productivity.html',
  styles: ``,
})
  
export class Productivity {
  accordionData = accordionData;
}
