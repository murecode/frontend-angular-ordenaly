import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { DetailsPageComponent } from '../details-page/list-page.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    DetailsPageComponent,
    
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgIf,

    RouterOutlet,
    RouterModule
  ],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {


}
