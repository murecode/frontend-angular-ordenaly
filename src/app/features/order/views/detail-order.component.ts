import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from '../order.service';
import { OrderDetails } from '../OrderDetails.interface';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './detail-order.component.html',
})
export class OrderDetailsComponent  {

  public orderDetails: OrderDetails[] = [];
  
  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    // private router: Router
    ) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
            this.loadOrderDetails(id);
          } else {
            alert("NO ha detalles")
          }
    })

    // this.loadOrderDetails();

  }

  loadOrderDetails(id: string) {
    this.orderService.getOrderDetails(id)
    .subscribe(
      orderDetail => this.orderDetails = orderDetail
    )

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

    

