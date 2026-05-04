import { Component } from '@angular/core';
import { avatarsData, clientLogoData } from '../../data';

@Component({
  selector: 'finance-clients',
  imports: [],
  templateUrl: './clients.html',
  styles: ``,
})
  
export class Clients {
  avatarsData = avatarsData;
  clientLogoData = clientLogoData;
}
