import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IItem, IOrder } from '../../interface/IOrder.interface';
import { OrderService } from '../../service/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './order-details-page.html',
})
export class OrderDetailsComponent  {

  public order?: IOrder;
  public item?: IItem;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute, //*
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.orderService.getOrderById( id ) ), //**
      )
      .subscribe( order => {
        if( !order ) return this.router.navigate(['/orders'])
        this.order = order;
        console.log({order})
        return;
      }
    );
  }

  calcularTotal(): number|undefined {
    return this.order?.pedido.reduce( (precio, pedido) => precio + (pedido.producto.precio * pedido.producto.precio), 0 )
  }
    
}
