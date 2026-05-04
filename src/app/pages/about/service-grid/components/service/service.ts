import { Component } from '@angular/core';
import { servicesData } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'service-grid-service',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './service.html',
  styles: ``,
})
export class Service {
  servicesData = servicesData;
}
