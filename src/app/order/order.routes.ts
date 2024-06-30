import { Route } from "@angular/router";

import { OrderListComponent } from "./views/list-order.component";  
import { NewOrderPageComponent } from "./views/new-order.component";
import { OrderDetailsComponent } from "./views/detail-order.component";  
import { OrderLayoutComponent } from "./views/layout/layout-order.component";

export default [
  
  { 
    path: '', component: OrderLayoutComponent,
    children: [
      {
        path: 'new',
        component: NewOrderPageComponent 
      },
      {
        path: '',
        component: OrderListComponent
      },
      {
        path: 'edit/:id',
        component: NewOrderPageComponent
      },
      {
        path: ':id',
        component: OrderDetailsComponent
      },
    ]
  },
  
] as Route[]