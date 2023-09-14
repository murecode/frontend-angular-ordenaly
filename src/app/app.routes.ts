import { Routes } from "@angular/router";

import { Error404PageComponent } from "./modules/error404-page/error404-page.component";
import { MainPageComponent } from "./modules/dashboard/pages/main-page/main-page.component";

export const routes: Routes = [

  { 
    path: '', 
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes')
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/products/product.routes')
  },
  {
    path: 'order',
    loadChildren: () => import('./modules/orders/order.routes')
  },
  { 
    path: '**',
    component: Error404PageComponent
  },
  
];