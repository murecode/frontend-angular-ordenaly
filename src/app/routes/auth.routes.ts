import { Route } from "@angular/router";
import { LoginPageComponent } from "../pages/auth/login-page.component"; 
import { RegisterPageComponent } from "../pages/auth/register-page.component"; 

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
        path:'**', component: LoginPageComponent
      }
    ]
  },

] as Route[]