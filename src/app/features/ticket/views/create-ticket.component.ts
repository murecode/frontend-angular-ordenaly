import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../ticket.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: 'create-ticket.component.html',
})
export class TicketCreateComponent  {

  private ticketService = inject(TicketService);
  private formBuilder = inject(FormBuilder);

  public ticketForm: FormGroup = this.formBuilder.group({
    numberOfPeople: ['1', [Validators.required, ] ],
  });


  onSubmit() {

    this.ticketService.newTicket(this.ticketForm.value).subscribe(
      ticket => {
        console.log("Se ha generado un nuevo Turno")
      }
    )

  }

}