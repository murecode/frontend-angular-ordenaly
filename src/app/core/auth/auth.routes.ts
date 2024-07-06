import { Route } from "@angular/router";
import { LoginPageComponent } from "./views/login.component"; 
import { RegisterPageComponent } from "./views/register.component"; 
import { AppLayoutComponent } from "src/app/layout/features-layout/layout.component";

export default [
  {
    path: '',
    children: [
      {
        path:'login', component: LoginPageComponent,
      },
      { 
        path:'register', component: RegisterPageComponent 
      },
      {
        path:'x',
        component: AppLayoutComponent
      }
    ]
  },

] as Route[]