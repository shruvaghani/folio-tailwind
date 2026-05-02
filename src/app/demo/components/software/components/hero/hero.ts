import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RouterLink } from '@angular/router';
import { avatarData } from '../../data';

@Component({
  selector: 'software-hero',
  imports: [NgxTypedJsModule, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  avatarData = avatarData;
}
