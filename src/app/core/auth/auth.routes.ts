import { Route } from "@angular/router";
import { LoginPageComponent } from "./views/login.component"; 
import { RegisterPageComponent } from "./views/register.component"; 

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