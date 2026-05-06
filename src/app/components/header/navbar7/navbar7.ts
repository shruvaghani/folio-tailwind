import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { Navbar } from "../navbar/navbar";
import { ThemeMode, ThemeService } from "@/app/services/theme.service";

export type ThemeType = {
  label: string;
  icon: string;
  mode: ThemeMode;
};

@Component({
  selector: 'app-navbar7',
  imports: [RouterLink, LucideAngularModule, Navbar],
  templateUrl: './navbar7.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar7 {
  isSticky = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }

  themeData: ThemeType[] = [
    { label: 'Light', icon: 'sun', mode: 'light' },
    { label: 'Dark', icon: 'moon', mode: 'dark' },
    { label: 'Auto', icon: 'ban', mode: 'auto' },
  ];

  constructor(private themeService: ThemeService) {}
  
    setTheme(mode: ThemeMode) {
      this.themeService.setTheme(mode);
    }
}
