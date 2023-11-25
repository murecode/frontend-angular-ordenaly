import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { ITicket } from '../../interface/ITicket.interface';
import { TicketService } from '../../service/ticket.service';

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

  constructor( private ticketService: TicketService ) {}

  ngOnInit(): void { 
    this.ticketService.getTickets()
      .subscribe( ticket => this.ticketList = ticket )
  }

}
