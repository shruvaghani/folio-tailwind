import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'finance-guidance',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './guidance.html',
  styles: ``,
})
  
export class Guidance {}
