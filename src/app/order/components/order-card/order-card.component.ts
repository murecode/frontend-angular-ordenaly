import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IOrder } from '../../interface/IOrder.interface';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'order-card',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './order-card.component.html',
  styles: [
  ]
})
export class OrderCardComponent {

  public orderList: IOrder[] = [];

  constructor( private orderService: OrderService ) { }

  ngOnInit(): void { 
    this.orderService.getOrders()
      .subscribe( order => this.orderList = order );
  }

}
