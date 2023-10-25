import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import {NgIf} from '@angular/common';

// import { FilterTabsComponent } from 'src/app/shared/components/fiterTabs/filter-tabs.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    // FilterTabsComponent,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgIf,

    RouterOutlet,
  ],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {


}
