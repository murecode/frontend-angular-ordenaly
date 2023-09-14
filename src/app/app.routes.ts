import { Routes } from "@angular/router";

import { Error404PageComponent } from "./modules/error404-page/error404-page.component";

export const routes: Routes = [

  { 
    path: 'dashboard', 
    loadChildren: () => import('./modules/dashboard/dashboard.routes')
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/products/product.routes')
  },
  { 
    path: '404',
    component: Error404PageComponent
  },
  { 
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { 
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

];