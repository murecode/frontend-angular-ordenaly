import { Route } from "@angular/router";

import { ListProductComponent } from "./pages/list-product/list-product.component"; 
import { NewProductComponent } from "./pages/new-product/new-product.component";

//localhost:4200/dashboard/products/
export default [
  
  { 
    path: '',
    children: [
      {
        path: '',
        component: ListProductComponent
      },
      {
        path: 'new',
        component: NewProductComponent
      },
      {
        path: ':id/edit',
        component: NewProductComponent
      },
      
    ]
  }

] as Route[]