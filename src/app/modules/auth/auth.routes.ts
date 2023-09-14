import { Route } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { MainPageComponent } from "../dashboard/pages/main-page/main-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

export default [
  {
    path:'login', component: LoginPageComponent,
  },
  { 
    path:'new-account', component: RegisterPageComponent 
  },
  {
    path: '', component: MainPageComponent
  }

] as Route[]