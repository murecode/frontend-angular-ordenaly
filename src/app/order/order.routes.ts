import { Route } from "@angular/router";

import { OrderListComponent} from "./pages/order-list-page/order-list.component";
import { NewOrderPageComponent } from "./pages/new-order-page/new-order-page.component";
import { OrderDetailsComponent } from "./pages/order-details-page/order-details.component";

export default [
  
  { 
    path: '',
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