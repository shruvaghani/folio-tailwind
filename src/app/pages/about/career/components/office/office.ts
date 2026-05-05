import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from "@/app/directive/glightbox.directive";

@Component({
  selector: 'career-office',
  imports: [LucideAngularModule, GlightboxDirective],
  templateUrl: './office.html',
  styles: ``,
})
  
export class Office {}
