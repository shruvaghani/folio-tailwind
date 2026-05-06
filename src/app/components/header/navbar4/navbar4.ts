import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-navbar4',
  imports: [Navbar, ThemeDropdown, LucideAngularModule],
  templateUrl: './navbar4.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Navbar4 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
