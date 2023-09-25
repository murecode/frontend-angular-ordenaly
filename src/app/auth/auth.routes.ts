import { Route } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { RegisterPageComponent } from "./register-page/register-page.component";

export default [
  {
    path:'login', component: LoginPageComponent,
  },
  { 
    path:'new-account', component: RegisterPageComponent 
  },

] as Route[]