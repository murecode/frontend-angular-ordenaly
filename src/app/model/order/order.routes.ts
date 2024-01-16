import { Route } from "@angular/router";

import { OrderListComponent } from "./pages/list-orders/list-order.component";  
import { NewOrderPageComponent } from "./pages/new-order/new-order.component";
import { OrderDetailsComponent } from "./pages/details-order/details-order.component";  
import { OrderLayoutComponent } from "./pages/layout-order/layout-order.component";

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