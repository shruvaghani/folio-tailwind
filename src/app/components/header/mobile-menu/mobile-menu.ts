import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { mobileMenuData } from './data';

@Component({
  selector: 'app-mobile-menu',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './mobile-menu.html',
  styles: ``,
})
  
export class MobileMenu {
  mobileMenuData = mobileMenuData;
}

