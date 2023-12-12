
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IOrder } from '../../interface/IOrder.interface';
import { OrderService } from '../../service/order.service';
// import { OrderService } from '../../service/order.service';
// import { IOrder } from '../../interface/IOrder.interface';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ NgFor, NgIf, RouterModule ],
  templateUrl: './order-list-page.html',
})
export class OrderListComponent {
  
  filterTabs: string[] = ['Todo','Pendientes','Completas']

  public orderList: IOrder[] = [];

  constructor( private orderService: OrderService ) { }

  ngOnInit(): void { 
    this.orderService.getOrders()
      .subscribe( order => this.orderList = order );
  }


}
