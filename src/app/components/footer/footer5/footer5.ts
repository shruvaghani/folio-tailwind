import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { footer7Data, socialData } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer5',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './footer5.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer5 {
  footer7Data = footer7Data;
  socialData = socialData;
}
