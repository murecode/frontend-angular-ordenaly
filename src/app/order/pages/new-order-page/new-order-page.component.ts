import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { OrderService } from '../../service/order.service';
import { IOrder } from '../../interface/IOrder.interface';

@Component({
  selector: 'new-order-page',
  standalone: true,
  imports: [ CommonModule, NgFor, ReactiveFormsModule ],
  templateUrl: './new-order-page.html',
  styles: [
  ]
})
export class NewOrderPageComponent {

  public newItem: FormControl = new FormControl('')

  public newOrderForm: FormGroup = this.orderForm.group({
    ticketId: ['', Validators.required ],
    mesa: [''],
    mesero: ['', Validators.required ],
    estado: ['PENDIENTE', Validators.required],
    pago: ['PENDIENTE', Validators.required ],
    pedido: this.orderForm.array([ ]),
    nota: ['Escriba una nota']
  })

  constructor(
    private orderService: OrderService,
    private orderForm: FormBuilder
  ) {}

  addProduct(): void {
    if ( this.newItem.invalid ) return;
    const newitem = this.newItem.value;

    console.log( newitem )

    this.pedido.push(
      this.orderForm.control( newitem )
    )
  }

  get pedido() {
    return this.newOrderForm.get('pedido') as FormArray
  }

  get currentOrder(): IOrder {
    const order = this.newOrderForm.value as IOrder;
    return order;
  }

  onSubmit(): void {
    if( this.newOrderForm.invalid ) return;

    if( this.currentOrder.ordenId ) {
      this.orderService.updateOrder( this.currentOrder )
        .subscribe( order => {
          // TODO: mostrar snackbar
        });
      return;
    }

    this.orderService.newOrder( this.currentOrder )
      .subscribe( order => {
        // TODO: mostrar snackbar y redirigir a /order
      } )


    //Solo muestra datos en consola
    console.log({
      formIsValid: this.newOrderForm.valid,
      value: this.newOrderForm.value,
    })

  }

}
