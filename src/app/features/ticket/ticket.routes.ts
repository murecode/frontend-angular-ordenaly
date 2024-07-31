import { Route } from "@angular/router";

import { TicketListComponent } from "./views/list-ticket.component"; 
import { NewTicketComponent } from "./views/new-ticket.component";

export default [
  { 
    path: '',
    children: [
      {
        path: '', component: TicketListComponent,
      },
      {
        path: 'new', component: NewTicketComponent
      },
    ]
  }
] as Route[]