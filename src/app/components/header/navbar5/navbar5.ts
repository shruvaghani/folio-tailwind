import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar5',
  imports: [Navbar, ThemeDropdown, RouterLink],
  templateUrl: './navbar5.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Navbar5 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
