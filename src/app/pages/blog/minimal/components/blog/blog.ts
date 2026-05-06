import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { blog2Data, blogData } from '../../data';

@Component({
  selector: 'minimal-blog',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './blog.html',
  styles: ``,
})
  
export class Blog {
  blogData = blogData;
  blog2Data = blog2Data;
}
