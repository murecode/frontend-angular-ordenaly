import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

interface MenuOption {
  title: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    RouterLinkActive,
    NgIf, NgFor,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

  ],
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  public menuOption: MenuOption[] = [
    { title: 'Turnos', route: '/dashboard/tickets' },
    { title: 'Ordenes', route: '/dashboard/orders/list' },
    { title: 'Menú', route: '/dashboard/products/list' },
    { title: 'Personal', route: '/dashboard/users' },
  ];

}
