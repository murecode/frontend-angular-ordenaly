import { Component } from '@angular/core';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ MatSidenavModule, MatListModule,  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {



};