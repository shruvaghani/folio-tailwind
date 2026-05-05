import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { Footer4 } from "@app/components/footer/footer4/footer4";

@Component({
  selector: 'app-integration-single',
  imports: [LucideAngularModule, RouterLink, Footer4],
  templateUrl: './integration-single.html',
  styles: ``,
})
  
export class IntegrationSingle {

}
