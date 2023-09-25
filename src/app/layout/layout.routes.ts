import { Route } from "@angular/router";
import { LayoutPageComponent } from "./layout-page.component";
import { ProductPageComponent } from "../models/products/product-page.component";
import { OrderPageComponent } from "../models/orders/order-page.component";

export default [
  {
    'path': '',
    'component': LayoutPageComponent,
    'children': [
      { path: 'orders', component: OrderPageComponent },
      { path: 'products', component: ProductPageComponent }
    ]
  }
] as [Route]