import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadComponent: () => import('./modules/auth/auth-register/auth-register.component').then(m => m.AuthRegisterComponent)
  },
  {
    path: '',
    redirectTo:'register',
    pathMatch:'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/auth/auth-login/auth-login.component').then(m => m.AuthLoginComponent)
  },
  {
    path: 'listProducts',
    loadComponent: () => import('./modules/products/products-list/products-list.component').then(m => m.ProductsListComponent)
  },
  {
    path: 'listUsers',
    loadComponent: () => import('./modules/users/users-list/users-list.component').then(m => m.UsersListComponent)
  }
];
