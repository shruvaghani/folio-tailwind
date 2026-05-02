import { Component } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TitleService } from './services/title.service';
import { BackToTop } from "./components/back-to-top/back-to-top";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
  
export class App {
  constructor(
    private router: Router,
    private titleService: TitleService,
  ) {}

  ngOnInit() {
    this.titleService.init();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }
}
