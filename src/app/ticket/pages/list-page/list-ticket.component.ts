import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { TicketCardComponent } from '../../components/ticket-card/ticket-card.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ TicketCardComponent ],
  templateUrl: './list-ticket.html',
  styles: [
  ]
})
export class ListTicketComponent {

}
