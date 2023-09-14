import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Error404PageComponent } from "./pages/error404-page/error404-page.component";

const routes: Routes = [

  { 
    path: 'dashboard', 
    loadChildren: () => import('./pages/dashboard/routes')
  },
  { 
    path: '404',
    component: Error404PageComponent
  },
  { 
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
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