import { ThemeMode, ThemeService } from '@/app/services/theme.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { themeData } from './data';

@Component({
  selector: 'app-theme-dropdown',
  imports: [LucideAngularModule],
  templateUrl: './theme-dropdown.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class ThemeDropdown {
  themeData = themeData;
  constructor(private themeService: ThemeService) {}

  setTheme(mode: ThemeMode) {
    this.themeService.setTheme(mode);
  }
}
