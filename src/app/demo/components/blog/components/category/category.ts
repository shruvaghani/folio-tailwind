import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { blogCardsData, categoriesData, socialMediaData, topicData } from '../../data';

@Component({
  selector: 'blog-category',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './category.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Category {
  categoriesData = categoriesData;
  socialMediaData = socialMediaData;
  topicData = topicData;
  blogCardsData = blogCardsData;
}
