import { Component, inject } from '@angular/core';
import { TicketService } from '../ticket.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,

    ModalComponent
  ],
  templateUrl: 'new-ticket.component.html',
})
export class NewTicketComponent  {

  private ticketService = inject(TicketService);
  private formBuilder = inject(FormBuilder);
  private router = inject( Router );

  public ticketForm: FormGroup = this.formBuilder.group({
    numberOfPeople: ['1', [Validators.required, Validators.minLength(1) ] ],
  });


  onSubmit() {

    this.ticketService.newTicket(this.ticketForm.value).subscribe(
      ticket => {
        console.log("Se ha generado un nuevo Turno")
      }
    )

    location.reload
    this.router.navigateByUrl('/tickets');

  }

  

}