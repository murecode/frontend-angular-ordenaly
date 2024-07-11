import { Routes } from "@angular/router";

import { HomeComponent } from "./shared/pages/home-page/home.component"; 
import { AppLayoutComponent } from "./layout/features-layout/layout.component";
import { LoginComponent } from "./core/auth/views/login.component";
import { OrderDetailsComponent } from "./features/order/views/detail-order.component";

// ordenaly.com/
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.routes')
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      {
        path: 'tickets',
        loadChildren: () => import('./features/ticket/ticket.routes')
      },
      {
        path: 'orders',
        loadChildren: () => import('./features/order/order.routes')
      },
      {
        path: 'carts/orders/:id',
        component: OrderDetailsComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./features/product/product.routes')
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