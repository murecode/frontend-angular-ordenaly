import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Order } from '../Order.interface'; 

import { OrderService } from '../order.service';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './detail-order.component.html',
})
export class OrderDetailsComponent  {

  title = "Detalles de Orden"

  public order?: Order;
  
  // constructor(
  //   private orderService: OrderService,
  //   private activatedRoute: ActivatedRoute, //*
  //   private router: Router
  //   ) {}

  // ngOnInit(): void {
  //   this.activatedRoute.params
  //     .pipe(
  //       switchMap( ({ id }) => this.orderService.getOrderById( id ) ), //**
  //     )
  //     .subscribe( order => {
  //       if( !order ) return this.router.navigate(['/orders'])
  //       this.order = order;
  //       console.log({order})
  //       return;
  //     }
  //   );
  // }

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

    

