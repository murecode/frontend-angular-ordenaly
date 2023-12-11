import { Routes } from "@angular/router";

import { HomePageComponent } from "./shared/pages/home-page/home-page.component"; 
import { Error404PageComponent } from "./shared/pages/error404-page/error404-page.component"; 
import { UserComponent } from "./user/user.component";
import { OrderLayoutComponent } from "./order/pages/layout-page/order-layout.component";
import { ProductLayoutComponent } from "./product/pages/layout-page/product-layout.component";
import { TicketLayoutComponent } from "./ticket/pages/layout-page/ticket-layout.component";

// ordenaly-app.com/
export const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.routes')
  },
  
  {
    path: 'orders',
    loadChildren: () => import('./order/order.routes')
  },
  {
    path: 'tickets',
    loadChildren: () => import('./ticket/ticket.routes')
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.routes')
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