import { Route } from "@angular/router";

import { OrderListComponent } from "../pages/order/order-list-page/order-list.component";  
import { NewOrderPageComponent } from "../pages/order/new-order-page/new-order-page.component";
import { OrderDetailsComponent } from "../pages/order/order-details-page/order-details.component";  
import { OrderLayoutComponent } from "../pages/order/order-layout-page/order-layout.component";

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