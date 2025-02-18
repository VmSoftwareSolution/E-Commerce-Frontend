import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () => import('./auth/auth-register/auth-register.component').then(m => m.AuthRegisterComponent)
  },
  {
    path: '',
    redirectTo:'register',
    pathMatch:'full'
  }
];
