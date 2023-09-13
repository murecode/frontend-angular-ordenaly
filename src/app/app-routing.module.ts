import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./pages/dashboard/main-page/main-page.component";
import { ProductPageComponent } from "./pages/dashboard/product-page/product-page.component";
import { Error404PageComponent } from "./pages/error404-page/error404-page.component";

const routes: Routes = [

  { 
    path: 'dashboard', 
    // loadChildren: () => import()
  },
  { 
    path: 'product',
    component: ProductPageComponent 
  },
  { 
    path: '404',
    component: Error404PageComponent },
  { 
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'},
  { 
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }