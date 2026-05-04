import { Route } from "@angular/router";
import { About1 } from "./about/about1/about1";

export const PAGES_ROUTES: Route[] = [
  {
    path: 'about/v1',
    component: About1,
    data: { title: 'About v1' },
  },
];