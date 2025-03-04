import { Routes } from '@angular/router';


 export const routes: Routes = [
    { path: '', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) },
    { 
        path: 'app', 
        loadChildren: () => import('./layout/layout.routes').then(m => m.LAYOUT_ROUTES) 
      },
    { path: '**', redirectTo: '' }  
  ];