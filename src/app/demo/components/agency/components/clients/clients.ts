import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clientLogosData } from '../../data';

@Component({
  selector: 'agency-clients',
  imports: [RouterLink],
  templateUrl: './clients.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Clients {
  clientLogosData = clientLogosData;
}
