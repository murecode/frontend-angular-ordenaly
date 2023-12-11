import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ITicket } from '../../interface/ITicket.interface';
import { TicketService } from '../../service/ticket.service';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';

@Component({
  selector: 'ticket-card',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule, AddButtonComponent],
  templateUrl: './ticket-card.component.html',
  styles: [
  ]
})
export class TicketCardComponent {

  public ticketList: ITicket[] = [];
  public ticket?: ITicket;

  constructor( private ticketService: TicketService ) {}

  ngOnInit(): void { 
    this.ticketService.getTickets()
      .subscribe( ticket => this.ticketList = ticket )
  }

  newTicket(ticket: ITicket) {
    // this.ticketService.addTicket(ticket)
    return console.log(ticket)
  }

}
