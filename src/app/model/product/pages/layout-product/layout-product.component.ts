import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component'; 

@Component({
  selector: '',
  standalone: true,
  templateUrl: './layout-product-page.html',
  imports: [ RouterOutlet, NavbarComponent, SidebarComponent ],
  styles: [
  ]
})
export class ProductLayoutComponent {

}