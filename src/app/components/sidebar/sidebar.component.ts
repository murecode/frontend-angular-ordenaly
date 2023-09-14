import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ MatSidenavModule, MatListModule ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  public showFiller = false;


};