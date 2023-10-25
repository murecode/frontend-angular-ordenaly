import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import {NgIf} from '@angular/common';

import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FilterTabsComponent } from 'src/app/shared/components/fiterTabs/filter-tabs.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    SidebarComponent, 
    NavbarComponent,
    FooterComponent,
    FilterTabsComponent,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    NgIf,

    RouterOutlet,
  ],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {

  showFiller = false;

}
