import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { OrderService } from '../../service/order.service';
import { IOrder } from '../../interface/IOrder.interface';

@Component({
  selector: 'new-order-page',
  standalone: true,
  imports: [ CommonModule, NgFor, ReactiveFormsModule, MatButtonModule ],
  templateUrl: './new-order-page.html',
  styles: [
  ]
})
export class NewOrderPageComponent {

  public form: FormGroup = this.orderForm.group({
    productos: this.orderForm.array([
      ['Hot Dog'],
      ['Burger'],
      ['Pizza'],
      ['Pizza'],
      ['Pizza'],
      ['Pizza']
    ])
  })

  constructor(
    private orderService: OrderService,
    private orderForm: FormBuilder
  ) {}

  get productList() {
    return this.form.get('products') as FormArray
  }

  get currentOrder(): IOrder {
    const order = this.form.value as IOrder;
    return order;
  }

  onSubmit(): void {
    if( this.form.invalid ) return;

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
      formIsValid: this.form.valid,
      value: this.form.value,
    })

  }

}
