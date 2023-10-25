import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { OrderService } from 'src/app/order/service/order.service';
import { IOrder } from 'src/app/order/interface/IOrder.interface';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './order-card.component.html',
  styles: [
  ]
})
export class OrderCardComponent implements OnInit{

  public orderList: IOrder[] = [];

  constructor( private orderService: OrderService ) {}

  ngOnInit(): void { 
    this.orderService.getOrders()
        .subscribe( order => this.orderList = order );
  }

}
