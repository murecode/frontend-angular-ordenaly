import { Routes } from "@angular/router";

import { HomePageComponent } from "./shared/pages/home-page/home-page.component"; 
import { Error404PageComponent } from "./shared/pages/error404-page/error404-page.component"; 

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
    //empty
  },
  { 
    path: '', 
    component: HomePageComponent,
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: Error404PageComponent
  },
  
];