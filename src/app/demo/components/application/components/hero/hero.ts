import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { avatarListData } from '../../data';

@Component({
  selector: 'application-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
  
export class Hero {
  avatarListData = avatarListData;
}
