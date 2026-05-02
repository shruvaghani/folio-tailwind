import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { aboutsData } from '../../data';

@Component({
  selector: 'software-client',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './client.html',
  styles: ``,
})
export class Client {
  aboutsData = aboutsData;
}
