
import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

import { OrderService } from '../../service/order.service';
import { IOrder } from '../../interface/IOrder.interface';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [ MatTabsModule, NgFor, MatButtonModule, MatCardModule ],
  templateUrl: './details-page.component.html',
})
export class DetailsPageComponent  {

  public orderList: IOrder[] = [];

  constructor( private orderService: OrderService ) {}

  ngOnInit(): void { 
    this.orderService.getOrders()
        .subscribe( order => this.orderList = order );
  }

}
