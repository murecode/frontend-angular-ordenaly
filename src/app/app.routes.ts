import { Routes } from "@angular/router";
import { Error404PageComponent } from "./shared/components/error404-page/error404-page.component"; 
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";

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
    path: 'products',
    loadChildren: () => import('./model/products/product.routes')
  },
  {
    path: 'orders',
    loadChildren: () => import('./model/orders/order.routes')
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