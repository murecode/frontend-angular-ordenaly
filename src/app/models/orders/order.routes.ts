import { Route } from "@angular/router";
import { LayoutPageComponent } from "src/app/layout/layout-page.component"; 
import { OrderPageComponent } from "./order-page.component"; 

export default [
  { 
    path: 'new', component: OrderPageComponent 
  },
  { 
    path: '', component: LayoutPageComponent, 
  }

] as Route[]