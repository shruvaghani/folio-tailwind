import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { register } from 'swiper/element/bundle';
import { featuresData } from '../../data';
import { CommonModule } from '@angular/common';

register();

@Component({
  selector: 'career-hero',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Hero {
  featuresData = featuresData;
}
