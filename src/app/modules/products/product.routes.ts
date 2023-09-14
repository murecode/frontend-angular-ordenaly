import { Route } from "@angular/router";
import { ProductPageComponent } from "./pages/product-page/product-page.component";

export default [
  {
    path: 'new-product',
    component: ProductPageComponent
  }
] as Route[]