import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { faqsData } from '../../data';

@Component({
  selector: 'pricing1-faq',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './faq.html',
  styles: ``,
})
export class Faq {
  faqsData = faqsData;
}
