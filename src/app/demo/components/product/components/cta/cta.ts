import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { GlightboxDirective } from "@/app/directive/glightbox.directive";

@Component({
  selector: 'product-cta',
  imports: [LucideAngularModule, RouterLink, GlightboxDirective],
  templateUrl: './cta.html',
  styles: ``,
})
export class CTA {

}
