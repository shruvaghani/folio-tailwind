import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { ThemeMode, ThemeService } from '@/app/services/theme.service';

export type ThemeType = {
  label: string;
  icon: string;
  mode: ThemeMode;
};

@Component({
  selector: 'app-topbar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './topbar.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Topbar {

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
