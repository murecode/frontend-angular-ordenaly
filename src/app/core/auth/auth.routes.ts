import { Route } from "@angular/router";
import { LoginComponent } from "./views/login.component"; 
import { RegisterComponent } from "./views/register.component"; 
import { AppLayoutComponent } from "src/app/layout/features-layout/layout.component";

export default [
  {
    path: '',
    children: [
      {
        path:'login', component: LoginComponent,
      },
      { 
        path:'register', component: RegisterComponent 
      },
      {
        path:'x',
        component: AppLayoutComponent
      }
    ]
  },

] as Route[]