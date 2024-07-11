import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: 'layout.component.html',
  styles: [
  ]

})
export class AppLayoutComponent {

  showFiller = false;

  // public menuOption: MenuOption[] = [
  //   { title: 'Turnos',   route: '/tickets' },
  //   { title: 'Ordenes',  route: '/orders' },
  //   { title: 'Menú',     route: '/products/list' },
  //   { title: 'Personal', route: '/users' },
  // ];

}