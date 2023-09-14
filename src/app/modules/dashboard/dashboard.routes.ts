import { Route } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { ProductPageComponent } from "../products/pages/product-page/product-page.component";

export default [
  
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'product',
    component: ProductPageComponent
  },

] as Route[];