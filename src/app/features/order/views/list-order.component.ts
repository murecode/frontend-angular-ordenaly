import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from "@angular/material/tabs";

import { Order } from '../Order.interface'; 
import { OrderService } from '../order.service'; 

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterModule,
    MatTabsModule
  ],
  templateUrl: './list-order.component.html',
})
export class OrderListComponent {

  title = "Listado de Ordenes";
  
  filterTabs = [
    {"label": 'Todo'},
    {"label": 'Pendiente'},
    {"label": 'Completada'},
  ];

  public orderList:Order[] = [];

  constructor( private orderService:OrderService ) { }

  ngOnInit(): void { 

    this.orderService.getOrders()
      .subscribe(
        order => this.orderList = order
      );

  }


}
