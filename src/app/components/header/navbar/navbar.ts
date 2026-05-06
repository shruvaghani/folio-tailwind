import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
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
}
