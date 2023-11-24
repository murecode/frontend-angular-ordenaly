import { Component } from '@angular/core';

import { OrderService } from '../../service/order.service';
import { IOrder, Pedido } from '../../interface/IOrder.interface';

import { TableDetailsComponent } from '../../components/table-details/table-details.component';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [ TableDetailsComponent ],
  templateUrl: './details-page.component.html',
})
export class DetailsPageComponent  {
  

  // public orderList: IOrder[] = [];
  // public pedidoList: IOrder[] = [];

  // constructor( private orderService: OrderService ) {}

  // ngOnInit(): void { 
  //   this.orderService.getOrders()
  //       .subscribe( order => this.orderList = order );
  // }

  // showOrderDetails( id: string ) {
  //   this.orderService.getOrderDetails( id )
  //     .subscribe(order => this.order = order)
  // }

  

}
