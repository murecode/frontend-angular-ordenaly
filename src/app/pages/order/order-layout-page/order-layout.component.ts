import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component'; 

@Component({
  selector: '',
  standalone: true,
  templateUrl: './order-layout.html',
  imports: [ RouterOutlet, NavbarComponent, SidebarComponent ],
  styles: [
  ]
})
export class OrderLayoutComponent {

}
