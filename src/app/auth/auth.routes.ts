import { Route } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { AuthLayoutComponent } from "./pages/layout-page/auth-layout.component";  

export default [
  {
    path: '', component: AuthLayoutComponent,
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