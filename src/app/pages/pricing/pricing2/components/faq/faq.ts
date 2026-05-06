import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { faqsData } from '../../data';

@Component({
  selector: 'pricing2-faq',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './faq.html',
  styles: ``,
})

export class Faq {
  faqsData = faqsData;
}
