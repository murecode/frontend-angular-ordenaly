import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [ MatSidenavModule, MatListModule ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {


};