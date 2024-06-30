import { Route } from "@angular/router";

import { NewOrderPageComponent } from "../order/views/new-order.component"; 
import { TicketListComponent } from "./views/list-ticket.component"; 

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