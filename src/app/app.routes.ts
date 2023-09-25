import { Routes } from "@angular/router";

import { Error404PageComponent } from "./shared/components/error404-page/error404-page.component"; 
import { LayoutPageComponent } from "./layout/layout-page.component"; 

export const routes: Routes = [

  { 
    path: '', 
    component: LayoutPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: 'product',
    loadChildren: () => import('./models/products/product.routes')
  },
  {
    path: 'order',
    loadChildren: () => import('./models/orders/order.routes')
  },
  { 
    path: '**',
    component: Error404PageComponent
  },
  
];