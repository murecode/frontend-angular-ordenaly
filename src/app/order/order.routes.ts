import { Route } from "@angular/router";

import { OrderLayoutComponent } from "./pages/layout-page/order-layout.component"; 
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NewPageComponent } from "./pages/new-page/new-page.component";
import { DetailsPageComponent } from "./pages/details-page/list-page.component";

export default [
  
  { 
    path: '', component: OrderLayoutComponent, 
    children: [
      {
        path: 'new', component: NewPageComponent 
      },
      {
        path: 'list', component: ListPageComponent
      },
      {
        path: 'edit/:id', component: NewPageComponent
      },
      {
        path: ':id', component: DetailsPageComponent
      },
    ]
  },
  
] as Route[]