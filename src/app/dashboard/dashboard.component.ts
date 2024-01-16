import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

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
  ],
  templateUrl: './dashboard-page.html',
  styles: [
  ]
})
export class DashboardComponent {

  public menuOption: MenuOption[] = [
    { title: 'Turnos',   route: '/tickets' },
    { title: 'Ordenes',  route: '/orders' },
    { title: 'Menú',     route: '/products/list' },
    { title: 'Personal', route: '/users' },
  ];

}
