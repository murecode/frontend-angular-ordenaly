import { Route } from "@angular/router";
import { UserComponent } from "./user.component";

export default [
  
  { 
    path: '', component: UserComponent, 
    children: [
      
    ]
  }

] as Route[]