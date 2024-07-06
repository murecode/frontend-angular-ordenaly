import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Ticket } from '../Ticket.interface'; 
import { TicketService } from '../ticket.service';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    AddButtonComponent,
    NavbarComponent
  ],
  templateUrl: './list-ticket.component.html',
  styles: []
})
export class TicketListComponent {

  public ticketList: Ticket[] = [];
  
  constructor(
    private ticketService: TicketService,
  ) {}

  ngOnInit():void {

    this.ticketService.getTickets()
      .subscribe(
        ticket => this.ticketList = ticket
        )

  }

  // public verTicket(): void {
  //   alert("viendo detalles")
  //   this.router.navigate(['orders/new'], { queryParams: { } }) 
  // }

  // addTicket() {
  //   this.ticketService.newTicket()
  //     .subscribe(ticket => {
  //       console.log("Ticket Creado")
  //     })
  // }

}
