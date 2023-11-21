import { Route } from "@angular/router";

import { LayoutPageComponent } from "../order/pages/layout-page/layout-page.component"; 
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NewPageComponent } from "./pages/new-page/new-page.component";
import { DetailsPageComponent } from "./pages/details-page/list-page.component";

export default [
  
  { 
    path: '', component: LayoutPageComponent, 
    children: [
      {
        path: 'new', component: NewPageComponent 
      },
      {
        path: 'by/:id', component: DetailsPageComponent
      },
      {
        path: 'list', component: ListPageComponent
      },
      {
        path: 'edit/:id', component: NewPageComponent
      },
      {
        path: 'details', component: DetailsPageComponent
      }
    ]
  },
  
] as Route[]