import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './modules/dashboard/pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  template:'<router-outlet></router-outlet>',
  standalone: true,
  imports: [ RouterOutlet, MainPageComponent ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ordenalyApp';
}
