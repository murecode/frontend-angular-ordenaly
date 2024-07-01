import { Route } from "@angular/router";

import { TicketListComponent } from "./views/list-ticket.component"; 
import { TicketCreateComponent } from "./views/create-ticket.component";

export default [
  { 
    path: '',
    children: [
      {
        path: '', component: TicketListComponent,
      },
      {
        path: 'new', component: TicketCreateComponent
      },
    ]
  }
] as Route[]