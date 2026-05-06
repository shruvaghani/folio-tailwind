import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Navbar } from "../navbar/navbar";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar1',
  imports: [LucideAngularModule, Navbar, ThemeDropdown, RouterLink],
  templateUrl: './navbar1.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar1 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
