import { Route } from "@angular/router";
import { LoginPageComponent } from "./pages/login/login-page.component"; 
import { RegisterPageComponent } from "./pages/register/register-page.component"; 

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