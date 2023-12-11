import { Route } from "@angular/router";

import { OrderLayoutComponent } from "./pages/layout-page/order-layout.component"; 
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NewOrderPageComponent } from "./pages/new-page/new-order-page.component";
import { DetailsPageComponent } from "./pages/details-page/list-page.component";

export default [
  
  { 
    path: '', component: ListPageComponent, 
    children: [
      {
        path: 'new', component: NewOrderPageComponent 
      },
      // {
      //   path: '', component: ListPageComponent
      // },
      {
        path: 'edit/:id', component: NewOrderPageComponent
      },
      {
        path: 'orders:id', component: DetailsPageComponent
      },
    ]
  },
  
] as Route[]