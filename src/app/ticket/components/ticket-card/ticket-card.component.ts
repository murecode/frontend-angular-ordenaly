import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { ITicket } from '../../interface/ITicket.interface';

@Component({
  selector: 'ticket-card',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './ticket-card.component.html',
  styles: [
  ]
})
export class TicketCardComponent {

  public ticketList: ITicket[] = [];

  // constructor( private orderService: OrderService ) {}

  // ngOnInit(): void { 
  //   this.orderService.getOrders()
  //       .subscribe( order => this.orderList = order );
  // }

}
