import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { watchProductsData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-grid',
  imports: [RouterLink, LucideAngularModule,CommonModule],
  templateUrl: './grid.html',
  styles: ``,
})
export class Grid {
  watchProductsData = watchProductsData;
  
}
