import { Routes } from "@angular/router";

import { HomePageComponent } from "./shared/pages/home-page/home.component"; 

// ordenaly-app.com/
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.routes')
  },
  {
    path: 'products',
    loadChildren: () => import('./features/product/product.routes')
  },
  {
    path: 'orders',
    loadChildren: () => import('./features/order/order.routes')
  },
  {
    path: 'tickets',
    loadChildren: () => import('./features/ticket/ticket.routes')
  },
  { 
    path: 'home', 
    component: HomePageComponent,
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: HomePageComponent
  },
  
];