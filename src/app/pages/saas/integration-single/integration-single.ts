import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { Footer4 } from "@app/components/footer/footer4/footer4";
import { Navbar5 } from "@app/components/header/navbar5/navbar5";

@Component({
  selector: 'app-integration-single',
  imports: [LucideAngularModule, RouterLink, Footer4, Navbar5],
  templateUrl: './integration-single.html',
  styles: ``,
})
  
export class IntegrationSingle {

}
