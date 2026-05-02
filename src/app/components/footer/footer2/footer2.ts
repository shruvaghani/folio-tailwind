import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { footer2Data } from '../data';

@Component({
  selector: 'app-footer2',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './footer2.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer2 {
  footer2Data = footer2Data;
}
