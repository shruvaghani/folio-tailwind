import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'contact-us1-form',
  imports: [LucideAngularModule, RouterLink, NgxTypedJsModule],
  templateUrl: './form.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Form {}
