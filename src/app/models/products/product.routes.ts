import { Route } from "@angular/router";
import { ProductPageComponent } from "./product-page.component"; 
import { LayoutPageComponent } from "src/app/layout/layout-page.component";

export default [
  
  {
    path: 'new-product',
    component: ProductPageComponent
  },
  { 
    path: '', component: LayoutPageComponent, 
  }

] as Route[]