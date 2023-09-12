import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';



@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [ MatSidenavModule ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {


};