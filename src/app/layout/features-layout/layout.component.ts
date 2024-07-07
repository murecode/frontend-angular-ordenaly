import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
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