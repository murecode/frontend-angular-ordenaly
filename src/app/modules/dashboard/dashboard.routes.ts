import { Route } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";

export default [
  
  {
    path: '',
    component: MainPageComponent,
    children: {
      
    }
  },

] as Route[];