import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderService } from 'src/app/models/orders/services/orders.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './order-card.component.html',
  styles: [
  ]
})
export class OrderCardComponent implements OnInit{

  public orderList: any = [];

  constructor( private orderService: OrderService ) {
    console.log("ListPageComponent")
  }

  ngOnInit(): void { 
    this.orderService.getOrders()
        .subscribe( order => this.orderList = order );
  }

}
