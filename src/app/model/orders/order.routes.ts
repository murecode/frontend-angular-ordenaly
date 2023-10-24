import { Route } from "@angular/router";
import { LayoutPageComponent } from "../orders/layout-page/layout-page.component"; 
import { ListPageComponent } from "./list-page/list-page.component";
import { NewPageComponent } from "./new-page/new-page.component";

export default [
  
  { 
    path: '', component: LayoutPageComponent, 
    children: [
      {
        path: 'new', component: NewPageComponent 
      },
      {
        path: 'edit/:id', component: NewPageComponent
      },
      {
        path: 'list', component: ListPageComponent
      },
    ]
  },
  

] as Route[]