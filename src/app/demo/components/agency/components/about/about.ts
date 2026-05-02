import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { tabsData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'agency-about',
  imports: [LucideAngularModule,CommonModule],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
 tabsData = tabsData;

 setActive(id: string) {
  this.tabsData = this.tabsData.map(tab => ({
    ...tab,
    active: tab.id === id
  }));
}
}
