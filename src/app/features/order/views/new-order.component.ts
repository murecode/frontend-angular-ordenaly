import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  waiterId: number | null = null;

  public newItem: FormControl = new FormControl('')

  public newOrderForm: FormGroup = this.orderForm.group({
    ticket: [ ],
    waiter: [ ],
    table: [ '', Validators.required ],
  })

  constructor(
    private orderService: OrderService,
    private authService: AuthService, 
    private orderForm: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
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
    this.waiterId = this.authService.getId(); 
    // Actualiza el formulario con el valor de waiterName
    this.newOrderForm.patchValue({
      waiter: this.waiterId
    });

  }

  onSubmit(): void {
    if (this.newOrderForm.invalid) return;

    this.orderService.newOrder(this.currentOrder)
      .subscribe(order => {
        // TODO: mostrar snackbar y redirigir a /carts/order/id
        this.router.navigate(['/orders'])

      })

    //Solo muestra datos en consola
    console.log({
      formIsValid: this.newOrderForm.valid,
      value: this.newOrderForm.value,
    })

  }

}
