import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { Navbar } from "../navbar/navbar";
import { Topbar } from "./components/topbar/topbar";
import { Schedule } from "./components/schedule/schedule";
import { MobileMenu } from "../mobile-menu/mobile-menu";

@Component({
  selector: 'app-navbar7',
  imports: [RouterLink, LucideAngularModule, Navbar, Topbar, Schedule, MobileMenu],
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

}
