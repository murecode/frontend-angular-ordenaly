import { Component } from "@angular/core";
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from "src/app/shared/components/header/header.component";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,

    HeaderComponent
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