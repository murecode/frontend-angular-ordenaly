import { Routes } from "@angular/router";

import { HomePageComponent } from "./shared/pages/home-page/home-page.component"; 
import { Error404PageComponent } from "./shared/pages/error404-page/error404-page.component"; 
import { DashboardComponent } from "./dashboard/dashboard.component";

// ordenaly-app.com/
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth.routes')
  },
  {
    path: 'products',
    loadChildren: () => import('./routes/product.routes')
  },
  {
    path: 'orders',
    loadChildren: () => import('./routes/order.routes')
  },
  {
    path: 'tickets',
    loadChildren: () => import('./routes/ticket.routes')
  },
  {
    path: 'users',
    loadChildren: () => import('./routes/user.routes')
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