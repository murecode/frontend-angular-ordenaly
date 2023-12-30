import { Route } from "@angular/router";

import { ListPageComponent } from "../pages/product/list-page/list-page.component"; 
import { NewProductComponent } from "../pages/product/new-page/new-product.component";

//localhost:4200/dashboard/products/
export default [
  
  { 
    path: '', 
    children: [
      {
        path: 'new',
        component: NewProductComponent
      },
      {
        path: ':id/edit',
        component: NewProductComponent
      },
      {
        path: 'list',
        component: ListPageComponent
      }
    ]
  }

] as Route[]