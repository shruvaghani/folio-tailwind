import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clientLogosData } from '../../data';

@Component({
  selector: 'about1-companies',
  imports: [RouterLink],
  templateUrl: './companies.html',
  styles: ``,
})
  
export class Companies {
  clientLogosData = clientLogosData;
}
