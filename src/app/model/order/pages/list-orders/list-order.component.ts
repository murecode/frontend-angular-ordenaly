
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IOrder } from '../../IOrder.interface'; 
import { OrderService } from '../../order.service'; 

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ NgFor, NgIf, RouterModule ],
  templateUrl: './list-order-page.html',
})
export class OrderListComponent {
  
  filterTabs:string[] = ['Todo','Pendientes','Completas']

  public orderList:IOrder[] = [];

  constructor( private orderService:OrderService ) { }

  ngOnInit(): void { 
    this.orderService.getOrders()
      .subscribe( order => this.orderList = order );
  }


}
