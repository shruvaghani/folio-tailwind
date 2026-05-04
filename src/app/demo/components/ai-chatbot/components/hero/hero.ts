import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'ai-chatbot-hero',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
  
export class Hero {}
