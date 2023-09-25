import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page.component';

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>',
  standalone: true,
  imports: [ RouterOutlet, LayoutPageComponent ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ordenalyApp';
}
