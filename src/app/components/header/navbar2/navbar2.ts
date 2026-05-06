import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { Topbar } from "./components/topbar/topbar";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { ScheduleModal } from '../schedule-modal/schedule-modal';
import { Navbar } from "../navbar/navbar";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";

@Component({
  selector: 'app-navbar2',
  imports: [LucideAngularModule, RouterLink, Topbar, MobileMenu, ScheduleModal, Navbar, ThemeDropdown],
  templateUrl: './navbar2.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class Navbar2 {

}
