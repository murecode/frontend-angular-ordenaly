import { Route } from "@angular/router";

import { OrderListComponent } from "./views/list-order.component";  
import { NewOrderComponent } from "./views/new-order.component";
import { OrderDetailsComponent } from "./views/detail-order.component";

export default [
  { 
    path: '',
    children: [
      {
        path: '',
        component: OrderListComponent
      },
      {
        path: 'details/:id',
        component: OrderDetailsComponent
      },
      {
        path: 'new',
        component: NewOrderComponent 
      },
      {
        path: 'edit/:id',
        component: NewOrderComponent
      },
    ]
  },
] as Route[]
