import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-coming-soon',
  imports: [Header, Hero, Footer],
  templateUrl: './coming-soon.html',
  styles: ``,
})
  
export class ComingSoon {
}
