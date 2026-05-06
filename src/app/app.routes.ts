import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/default',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./demo/demo.route').then((mod) => mod.DEMO_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.route').then((mod) => mod.PAGES_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
];
