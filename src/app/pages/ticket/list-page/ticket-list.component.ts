import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ITicket } from 'src/app/interfaces/ITicket.interface'; 
import { TicketService } from 'src/app/service/ticket.service';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [RouterModule, CommonModule, AddButtonComponent],
  templateUrl: './ticket-list-page.html',
  styles: [
  ]
})
export class TicketListComponent {

  public ticketList: ITicket[] = [];

  constructor(
    private ticketService: TicketService,
  ) { }

  ngOnInit():void {
    this.ticketService.getTickets()
      .subscribe(ticket => this.ticketList = ticket)
  }

  // public verTicket(): void {
  //   alert("viendo detalles")
  //   this.router.navigate(['orders/new'], { queryParams: { } }) 
  // }

  addTicket():void {
    this.ticketService.newTicket()
      .subscribe(ticket => {
        console.log("Ticket Creado")
      })

  }

}
