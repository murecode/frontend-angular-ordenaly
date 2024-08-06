import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Ticket } from '../Ticket.interface'; 
import { TicketService } from '../ticket.service';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { NewTicketComponent } from "./new-ticket.component";
import { NewOrderComponent } from '../../order/views/new-order.component';
import { PageableComponent } from 'src/app/shared/components/pageable/pageable.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    AddButtonComponent,
    ModalComponent,
    NewTicketComponent,
    PageableComponent
],
  templateUrl: './list-ticket.component.html',
  styles: []
})
export class TicketListComponent {

  @ViewChild('ticketmodal') modal?: ModalComponent;
  isTicketModalOpen = false;
  isOrderModalOpen = false;

  public ticketList: Ticket[] = [];

  constructor(
    private ticketService: TicketService,
    private router: Router
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

  openTicketModal(): void {
    this.isTicketModalOpen = true;
    this.modal?.openModal();
  }

  closeTicketModal(): void {
    this.isTicketModalOpen = false;
    this.modal?.closeModal();
  }

  openOrderModal(): void {
    this.isOrderModalOpen = true;
    this.modal?.openModal();
  }

  closeOrderModal(): void {
    this.isOrderModalOpen = false;
    this.modal?.openModal();
  }

  goToNewOrder(ticketId: number): void {
    this.router.navigate(['/orders/new', ticketId]);
  }

}
