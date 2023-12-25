import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

import { } from '../order-details-page/order-details.component';

@Component({
  selector: 'order-layout',
  standalone: true,
  imports: [

    NgIf,

    RouterOutlet,
    RouterModule
  ],
  templateUrl: 'order-layout.html'
})
export class OrderLayoutComponent {


}
