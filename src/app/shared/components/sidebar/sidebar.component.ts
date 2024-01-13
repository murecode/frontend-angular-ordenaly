import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuOption {
  title: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  public menuOption: MenuOption[] = [
    { title: 'Turnos',   route: '/tickets' },
    { title: 'Ordenes',  route: '/orders' },
    { title: 'Menú',     route: '/products/list' },
    { title: 'Personal', route: '/users' },
  ];

}
