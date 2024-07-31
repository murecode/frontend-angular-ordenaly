import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ticket } from '../Ticket.interface'; 
import { TicketService } from '../ticket.service';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { NewTicketComponent } from "./new-ticket.component";

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    AddButtonComponent,
    ModalComponent,
    NewTicketComponent
],
  templateUrl: './list-ticket.component.html',
  styles: []
})
export class TicketListComponent {

  @ViewChild('ticketmodal') modal?: ModalComponent;

  public ticketList: Ticket[] = [];

  constructor(
    private ticketService: TicketService,
  ) {}

  ngOnInit():void {

    this.loadAllTickets()
 
  }

  selectOption(event: Event) {
    const elem = event.target as HTMLSelectElement;
    const val = elem.value;

    if (val == 'ALL') {
      this.loadAllTickets();
    } else {
      this.loadTicketsByStatus(val)
    }

  }

  loadAllTickets() {
    this.ticketService.getTickets()
    .subscribe(
      ticket => this.ticketList = ticket
      )
  }

  loadTicketsByStatus(status: string) {
    this.ticketService.getTicketsByStatus(status)
      .subscribe(
        tickets => this.ticketList = tickets
      );
  }

  openModal(): void {
    this.modal?.openModal();
  }

}
