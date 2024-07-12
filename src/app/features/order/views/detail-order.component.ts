import { Component, OnInit, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from '../order.service';
import { OrderDetails } from '../OrderDetails.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './detail-order.component.html',
})
export class OrderDetailsComponent {

  public orderDetail?: OrderDetails;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(

      switchMap(({id}) => this.orderService.getOrderDetails(id)),

    ).subscribe(order => {
      if (!order) return this.router.navigate(['/orders']);

      this.orderDetail = order; 
      console.log(order)

      return;
    })

  }

  // calcularPrecio(): number | undefined {
  //   return this.order?.item_list.reduce( (total, producto) => total + producto.price, 0)
  // }

  // calcularTotal(): number | undefined {
  //   return this.order?.item_list?.reduce((precio, pedido) => {
  //     if (pedido.price !== undefined) {
  //       return precio + pedido.price;
  //     }
  //     return precio;
  //   }, 0);
  // }


}



