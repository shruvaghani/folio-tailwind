import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { clientLogoData } from '../../data';

@Component({
  selector: 'about2-clients',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './clients.html',
  styles: ``,
})
  
export class Clients {
  clientLogoData = clientLogoData;
}
