import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar1 } from "@app/components/header/navbar1/navbar1";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-error',
  imports: [RouterLink, Navbar1, Footer3],
  templateUrl: './error.html',
  styles: ``,
})
  
export class Error {

}
