import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

import { DetailsPageComponent } from '../details-page/list-page.component';

@Component({
  selector: 'order-layout',
  standalone: true,
  imports: [
    DetailsPageComponent,
    NgIf,

    RouterOutlet,
    RouterModule
  ],
  templateUrl: 'order-layout.html'
})
export class OrderLayoutComponent {


}
