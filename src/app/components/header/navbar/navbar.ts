import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { navbarData } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  navbarData = navbarData;
  constructor(private router: Router) {}

  isActive(item: any): boolean {
    return this.router.url === item.url;
  }

  isChildActive(item: any): boolean {
    if (item.url && this.router.url === item.url) return true;

    if (item.nestedLinks) return item.nestedLinks.some((i: any) => this.isChildActive(i));

    if (item.megaColumns)
      return item.megaColumns.some((col: any) => col.links.some((i: any) => this.isChildActive(i)));

    if (item.children) return item.children.some((i: any) => this.isChildActive(i));

    return false;
  }
}
