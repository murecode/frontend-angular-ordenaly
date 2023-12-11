import { Route } from "@angular/router";

import { NewOrderPageComponent } from "../order/pages/new-page/new-order-page.component";
import { ListTicketComponent } from "./pages/list-page/list-ticket.component";

export default [
  
  { 
    path: '',
    children: [
      {
        path: '', component: ListTicketComponent,
      },
      {
        path: 'new', component: NewOrderPageComponent
      },
    ]
  }

] as Route[]