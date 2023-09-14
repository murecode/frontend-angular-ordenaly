import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SidebarComponent, 
    NavbarComponent,
    FooterComponent,

    RouterOutlet,
  ],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



}