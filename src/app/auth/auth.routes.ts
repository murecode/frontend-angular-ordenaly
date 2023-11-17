import { Route } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";

export default [
  {
    path: '', component: LayoutPageComponent,
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