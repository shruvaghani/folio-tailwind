import { Component, ElementRef, HostListener } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-back-to-top',
  imports: [LucideAngularModule],
  templateUrl: './back-to-top.html',
  styles: `
    #backTop.show {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  `,
})
export class BackToTop {
  constructor(private eleRef: ElementRef) {}

  scrollOffset = 450;
  button!: HTMLElement;

  offsetFromTop!: number;
  progress!: SVGGeometryElement | null;
  length!: number;

  ngOnInit() {
    this.button = this.eleRef.nativeElement.querySelector('#backTop');
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.button) return;
    const target = window;
    if (target && target.scrollY > this.scrollOffset) {
      this.button.classList.add('show');
    } else {
      this.button.classList.remove('show');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
