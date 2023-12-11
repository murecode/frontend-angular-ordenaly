import { Route } from "@angular/router";

import { ProductLayoutComponent } from "./pages/layout-page/product-layout.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NewPageComponent } from "./pages/new-page/new-page.component";

//localhost:4200/dashboard/products/
export default [
  
  { 
    path: '', component: ProductLayoutComponent, 
    children: [
      {
        path: 'new', component: NewPageComponent
      },
      {
        path: '', component: ListPageComponent
      }
    ]
  }

] as Route[]