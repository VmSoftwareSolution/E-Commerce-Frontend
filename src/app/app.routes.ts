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
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/auth-login/auth-login.component').then(m => m.AuthLoginComponent)
  },
  {
    path: 'listProducts',
    loadComponent: () => import('./products/products-list/products-list.component').then(m => m.ProductsListComponent)
  }
];
