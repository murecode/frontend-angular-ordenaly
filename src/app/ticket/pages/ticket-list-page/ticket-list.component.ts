import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ITicket } from '../../interface/ITicket.interface';
import { TicketService } from '../../service/ticket.service';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ RouterModule, CommonModule, AddButtonComponent ],
  templateUrl: './ticket-list-page.html',
  styles: [
  ]
})
export class TicketListComponent {

  public ticketList: ITicket[] = [];
  public ticket?: ITicket;

  constructor(
    private ticketService: TicketService,
    ) {}

  ngOnInit(): void { 
    this.ticketService.getTickets()
      .subscribe( ticket => this.ticketList = ticket )

  }

  // public verTicket(): void {
  //   alert("viendo detalles")
  //   this.router.navigate(['orders/new'], { queryParams: { } }) 
  // }

  public newTicket(): void {
    this.ticketService.addTicket()
      .subscribe()
    console.log("Ticket Creado")
  }

}
