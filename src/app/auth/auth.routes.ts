import { Route } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LayoutPageComponent } from "./layout-page/layout-page.component";

export default [
  {
    path: '', component: LayoutPageComponent,
    children: [
      {
        path:'login', component: LoginPageComponent,
      },
      { 
        path:'new-account', component: RegisterPageComponent 
      },
      {
        path:'**', component: LoginPageComponent
      }
    ]
  },

] as Route[]