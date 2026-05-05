import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'feature-single-faq',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './faq.html',
  styles: ``,
})
  
export class Faq {}
