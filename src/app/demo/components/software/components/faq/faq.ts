import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { faqData, type FaqItemType } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'software-faq',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './faq.html',
  styles: ``,
})
export class Faq {
  faqData = faqData;
}
