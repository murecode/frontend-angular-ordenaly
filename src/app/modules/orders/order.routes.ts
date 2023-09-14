import { Route } from "@angular/router";
import { MainPageComponent } from "../dashboard/pages/main-page/main-page.component";
import { OrderPageComponent } from "./pages/order-page/order-page.component";

export default [
  { 
    path: 'new-order', component: OrderPageComponent 
  },
  { 
    path: '', component: MainPageComponent, 
  }

] as Route[]