import { Route } from "@angular/router";

import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

export default [
  
  { 
    path: '', component: LayoutPageComponent, 
    children: [
      {
        path: 'list', component: LayoutPageComponent
      }
    ]
  }

] as Route[]