import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { featureListData } from '../../data';

@Component({
  selector: 'ai-chatbot-effort',
  imports: [LucideAngularModule],
  templateUrl: './effort.html',
  styles: ``,
})
  
export class Effort {
  featureListData = featureListData;
}
