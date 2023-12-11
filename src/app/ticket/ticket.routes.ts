import { Route } from "@angular/router";

import { TicketLayoutComponent } from "./pages/layout-page/ticket-layout.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";

export default [
  
  { 
    path: '', component: TicketLayoutComponent, 
    children: [
      {
        path: '', component: ListPageComponent,
      }
    ]
  }

] as Route[]