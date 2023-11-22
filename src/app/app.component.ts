import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>',
  standalone: true,
  imports: [ RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ordenalyApp';
}
