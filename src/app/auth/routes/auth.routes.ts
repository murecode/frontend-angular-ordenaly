import { Route } from "@angular/router";
import { LoginComponent } from "../components/login/login.component"; 
import { RegisterComponent } from "../components/register/register.component"; 
import { AppLayoutComponent } from "src/app/layout/layout.component";

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