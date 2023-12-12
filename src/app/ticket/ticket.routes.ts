import { Route } from "@angular/router";

import { NewOrderPageComponent } from "../order/pages/new-order-page/new-order-page.component";
import { TicketListComponent } from "./pages/ticket-list-page/ticket-list.component";

export default [
  
  { 
    path: '',
    children: [
      {
        path: '', component: TicketListComponent,
      },
      {
        path: 'new', component: NewOrderPageComponent
      },
    ]
  }

] as Route[]