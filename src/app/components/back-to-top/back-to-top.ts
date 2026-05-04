import { Component, HostListener } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './back-to-top.html',
})
  
export class BackToTop {
  scrollOffset = 450;
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isVisible = window.scrollY > this.scrollOffset;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
