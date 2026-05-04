import { Route } from "@angular/router";
import { About1 } from "./about/about1/about1";
import { About2 } from "./about/about2/about2";

export const PAGES_ROUTES: Route[] = [
  {
    path: 'about/v1',
    component: About1,
    data: { title: 'About v1' },
  },
  {
    path: 'about/v2',
    component: About2,
    data: { title: 'About v2' },
  },
];