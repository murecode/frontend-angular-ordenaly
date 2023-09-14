import { Route } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { OrderPageComponent } from "./order-page/order-page.component";

export default [
  
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'product',
    component: ProductPageComponent
  },
  {
    path: 'order',
    component: OrderPageComponent
  }

] as Route[];