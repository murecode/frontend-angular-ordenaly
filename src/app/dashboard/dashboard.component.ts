import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    NgIf,

  ],
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

}
