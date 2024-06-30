
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Order } from '../Order.interface'; 
import { OrderService } from '../order.service'; 

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ NgFor, NgIf, RouterModule ],
  templateUrl: './list-order.component.html',
})
export class OrderListComponent {
  
  filterTabs:string[] = ['Todo','Pendientes','Completas']

  public orderList:Order[] = [];

  constructor( private orderService:OrderService ) { }

  ngOnInit(): void { 
    this.orderService.getOrders()
      .subscribe( order => this.orderList = order );
  }


}
