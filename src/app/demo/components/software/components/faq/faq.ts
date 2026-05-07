import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { faqData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'software-faq',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './faq.html',
  styles: ``,
})
  
export class Faq {
  faqData = faqData;
  toggleAccordion(index: number) {
    this.faqData = this.faqData.map((item, i) => ({
      ...item,
      isActive: i === index ? !item.isActive : false,
    }));
  }
}
