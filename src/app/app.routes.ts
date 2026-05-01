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
];
