import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { footer7Data, platformData, socialData } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer7',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './footer7.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Footer7 {
  platformData = platformData;
  footer7Data = footer7Data;
  socialData = socialData;
}
