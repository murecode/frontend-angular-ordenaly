import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderService } from 'src/app/model/orders/services/orders.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IOrder } from 'src/app/model/orders/interfaces/IOrder.interface';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './order-card.component.html',
  styles: [
  ]
})
export class OrderCardComponent implements OnInit{

  public orderList: IOrder[] = [];

  constructor( private orderService: OrderService ) {
    console.log("ListPageComponent")
  }

  ngOnInit(): void { 
    this.orderService.getOrders()
        .subscribe( order => this.orderList = order );
  }

}
