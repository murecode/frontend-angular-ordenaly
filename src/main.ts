import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';
import { OrderService } from './app/models/orders/services/orders.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routes),
      importProvidersFrom(HttpClientModule),
      OrderService,
    ]

  }).catch(err => console.error(err)) 
