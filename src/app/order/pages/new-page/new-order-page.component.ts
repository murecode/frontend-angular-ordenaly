import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { OrderService } from '../../service/order.service';
import { IOrder } from '../../interface/IOrder.interface';

@Component({
  selector: 'new-order-page',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule ],
  templateUrl: './new-order-page.html',
  styles: [
  ]
})
export class NewOrderPageComponent {

  public orderForm = new FormGroup({
    id:      new FormControl(),  
    waiter:  new FormControl<string>(''),
    ticket:  new FormControl<number>(0),
    table:   new FormControl<number>(0),
    status:  new FormControl<string>(''),
    items:   new FormControl(),
  })

  constructor( private orderService: OrderService ) {}

  get currentOrder(): IOrder {
    const order = this.orderForm.value as IOrder;
    return order;
  }

  onSubmit(): void {

    if( this.orderForm.invalid ) return;

    if( this.currentOrder.id ) {
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
      formIsValid: this.orderForm.valid,
      value: this.orderForm.value,
    })

  }

}
