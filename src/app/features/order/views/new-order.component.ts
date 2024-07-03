import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';

import { TicketService } from '../../ticket/ticket.service';
import { OrderService } from '../order.service'; 
import { Order } from '../Order.interface'; 

@Component({
  selector: 'new-order-page',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule],
  templateUrl: './new-order.component.html',
  styles: [
  ]
})
export class NewOrderComponent {

  public newItem: FormControl = new FormControl('')

  public newOrderForm: FormGroup = this.orderForm.group({
    ticketId: [''],
    mesa: [''],
    mesero: [''],
    estado: ['PENDIENTE'],
    pago: ['PENDIENTE'],
    pedido: this.orderForm.array([]),
    nota: ['Observaciones del pedido']
  })

  constructor(
    private orderService:OrderService,
    private ticketService:TicketService, 
    private orderForm:FormBuilder,
    private activeRoute:ActivatedRoute,
    private router:Router
  ) {}

  get currentOrder():Order {
    const order = this.newOrderForm.value as Order;
    return order;
  }

  // ngOnInit():void {

  //   this.activeRoute.params
  //     .pipe(
  //       switchMap(({ id }) => this.ticketService.getTicket(id)),
  //     ).subscribe(ticket => {
  //       if (!ticket) return this.router.navigateByUrl('/');
  //       this.newOrderForm.reset(ticket)
  //       return;
  //     });

  // }

  get pedido() {
    return this.newOrderForm.get('pedido') as FormArray
  }

  addProduct(): void {
    if (this.newItem.invalid) return;
    const newitem = this.newItem.value;

    console.log(newitem)

    this.pedido.push(
      this.orderForm.control(newitem)
    )
  }

  onSubmit(): void {
    if (this.newOrderForm.invalid) return;

    // if (this.currentOrder.order) {
    //   this.orderService.updateOrder(this.currentOrder)
    //     .subscribe(order => {
    //       // TODO: mostrar snackbar
    //     });
    //   return;
    // }

    this.orderService.newOrder(this.currentOrder)
      .subscribe(order => {
        // TODO: mostrar snackbar y redirigir a /order
      })


    //Solo muestra datos en consola
    console.log({
      formIsValid: this.newOrderForm.valid,
      value: this.newOrderForm.value,
    })

  }

}
