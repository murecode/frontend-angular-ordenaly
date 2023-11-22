import { Routes } from "@angular/router";

import { HomePageComponent } from "./others/home-page/home-page.component";
import { Error404PageComponent } from "./others/error404-page/error404-page.component"; 
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
    path: 'products', component: ProductLayoutComponent,
    loadChildren: () => import('./product/product.routes')
  },
  
  {
    path: 'orders', component: OrderLayoutComponent,
    loadChildren: () => import('./order/order.routes')
  },
  {
    path: 'tickets', component: TicketLayoutComponent,
    loadChildren: () => import('./ticket/ticket.routes')
  },
  {
    path: 'users', component: UserComponent
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