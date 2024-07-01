import { Route } from "@angular/router";

import { ListProductComponent } from "././views/list-products.component"; 
import { NewProductComponent } from "././views/create-product.component";

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
      }
    ]
  }
] as Route[];
