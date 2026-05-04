import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { blogData } from '../../data';

@Component({
  selector: 'portfolio-develop-tip',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './develop-tip.html',
  styles: ``,
})
export class DevelopTip {
  blogData = blogData;
}
