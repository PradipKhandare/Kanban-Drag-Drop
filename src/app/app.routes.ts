import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./routes/routes-routing.module').then(m => m.RoutesRoutingModule) },
    { path: '', redirectTo: '/routes', pathMatch: 'full' },
];
