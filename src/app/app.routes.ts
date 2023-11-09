import { Routes } from "@angular/router";

import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Error404PageComponent } from "./shared/pages/error404-page/error404-page.component"; 

// ordenaly-app.com/
export const routes: Routes = [

  { 
    path: 'home', 
    component: HomePageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: 'dashboard/products', component: DashboardComponent,
    loadChildren: () => import('./product/product.routes')
  },
  
  {
    path: 'dashboard/orders', component: DashboardComponent,
    loadChildren: () => import('./order/order.routes')
  },
  {
    path: 'dashboard/tickets', component: DashboardComponent,
    loadChildren: () => import('./ticket/ticket.routes')
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