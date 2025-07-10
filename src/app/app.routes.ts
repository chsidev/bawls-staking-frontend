import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StakeComponent } from './pages/stake/stake.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/stake/stake.component').then(m => m.StakeComponent)
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];
