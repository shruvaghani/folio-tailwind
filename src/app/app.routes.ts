import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./demo/demo.route').then((mod) => mod.DEMO_ROUTES),
  },
];
