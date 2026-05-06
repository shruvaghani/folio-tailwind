import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";

@Component({
  selector: 'app-navbar6',
  imports: [Navbar, RouterLink, LucideAngularModule, ThemeDropdown],
  templateUrl: './navbar6.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Navbar6 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
