import { Routes } from "@angular/router";

import { AppLayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./auth/components/login/login.component";
import { loginGuard } from "./auth/guards/login.guard";

// ordenaly.com/
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/routes/auth.routes')
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'tickets',
        loadChildren: () => import('./features/ticket/ticket.routes'),
        canActivate: [loginGuard],
      },
      {
        path: 'orders',
        loadChildren: () => import('./features/order/routes/order.routes'),
        canActivate: [loginGuard],
      },
      {
        path: 'products',
        loadChildren: () => import('./features/product/product.routes'),
        canActivate: [loginGuard],
      },
    ]
  },
  { 
    path: 'home', 
    loadComponent: () => import('./shared/pages/home-page/home.component').then(c => c.HomeComponent),
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: LoginComponent
  },
  
];