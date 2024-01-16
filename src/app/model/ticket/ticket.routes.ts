import { Route } from "@angular/router";

import { NewOrderPageComponent } from "../order/pages/new-order/new-order.component"; 
import { TicketListComponent } from "./pages/list-tickets/list-ticket.component"; 

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