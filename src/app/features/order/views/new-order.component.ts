import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';

import { TicketService } from '../../ticket/ticket.service';
import { OrderService } from '../services/order.service'; 
import { Order } from '../interfaces/Order.interface';
import { ModalComponent } from "../../../shared/components/modal/modal.component"; 
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'new-order',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    ReactiveFormsModule,
    ModalComponent,
  ],
  templateUrl: 'new-order.component.html',
  styles: [
  ]
})
export class NewOrderComponent {

  title = "Nueva Orden";
  ticketId: number | null = null;
  waiter: string | null = null;

  public newItem: FormControl = new FormControl('')

  public newOrderForm: FormGroup = this.orderForm.group({
    ticket: [ ],
    waiter: [ ],
    diningTable: [ '', Validators.required ],
    // pedido: this.orderForm.array([]),
  })

  constructor(
    private orderService: OrderService,
    private authService: AuthService, 
    private orderForm: FormBuilder,
    private activeRoute: ActivatedRoute,
  ) {}

  get currentOrder(): Order {
    const order = this.newOrderForm.value as Order;
    return order;
  }

  ngOnInit():void {

    this.activeRoute.paramMap.subscribe(params => {
      // Se obtiene el id del path
      this.ticketId = +params.get('id')!;
      // Actualiza el formulario con el valor de waiterName
      this.newOrderForm.patchValue({
        ticket: this.ticketId
      });
    });

    this.waiter = this.authService.getFullname();
    // Actualiza el formulario con el valor de waiterName
    this.newOrderForm.patchValue({
      waiter: this.waiter
    });

  }

  onSubmit(): void {
    if (this.newOrderForm.invalid) return;

    this.orderService.newOrder(this.currentOrder)
      .subscribe(order => {
        // TODO: mostrar snackbar y redirigir a /carts/order/id
      })

    //Solo muestra datos en consola
    console.log({
      formIsValid: this.newOrderForm.valid,
      value: this.newOrderForm.value,
    })

  }

}
