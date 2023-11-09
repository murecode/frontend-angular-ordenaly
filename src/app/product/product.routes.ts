import { Route } from "@angular/router";

import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NewPageComponent } from "./pages/new-page/new-page.component";

//localhost:4200/dashboard/products/
export default [
  
  { 
    path: '', component: LayoutPageComponent, 
    children: [
      {
        path: 'new', component: NewPageComponent
      },
      {
        path: 'list', component: ListPageComponent
      }
    ]
  }

] as Route[]