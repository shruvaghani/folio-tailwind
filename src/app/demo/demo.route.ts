import { Route } from "@angular/router";
import { Default } from "./components/default/default";
import { Agency } from "./components/agency/agency";
import { Application } from "./components/application/application";
import { Software } from "./components/software/software";
import { Finance } from "./components/finance/finance";
import { Product } from "./components/product/product";
import { Saas } from "./components/saas/saas";
import { Chatbox } from "./components/chatbox/chatbox";
import { Portfolio } from "./components/portfolio/portfolio";
import { Blog } from "./components/blog/blog";

export const DEMO_ROUTES: Route[] = [
  {
    path: 'default',
    component: Default,
    data: { title: 'Claasic Default' },
  },
  {
    path: 'software',
    component: Software,
    data: { title: 'Software Company' },
  },
  {
    path: 'finance',
    component: Finance,
    data: { title: 'Finance Consulting' },
  },
  {
    path: 'agency',
    component: Agency,
    data: { title: 'AI Agency' },
  },
  {
    path: 'product',
    component: Product,
    data: { title: 'Product Landing' },
  },
  {
    path: 'saas',
    component: Saas,
    data: { title: 'Saas' },
  },
  {
    path: 'chatbox',
    component: Chatbox,
    data: { title: 'Saas AI Chatbox' },
  },
  {
    path: 'application',
    component: Application,
    data: { title: 'Application showcase' },
  },
  {
    path: 'portfolio',
    component: Portfolio,
    data: { title: 'Portfolio' },
  },
  {
    path: 'blog',
    component: Blog,
    data: { title: 'Blog Home' },
  },
];