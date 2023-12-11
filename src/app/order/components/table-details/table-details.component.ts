import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { IItem, IOrder } from '../../interface/IOrder.interface';
import { OrderService } from '../../service/order.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/product/interface/IProduct.inteface';

@Component({
  selector: 'table-details',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './table-details.component.html',
  styles: [
  ]
})
export class TableDetailsComponent implements OnInit {

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

//* ActiveRoute, proporciona acceso a información sobre una ruta asociada...
//  con un componente que se carga en un *outlet*. Se utiliza para recorrer...
//  el árbol de RouterState y extraer información de los nodos.

//** switcMap, cancela observables anteriores y cambia al nuevo observable emitido...
// util cuando, se tiene un flujo continuo de eventos, como solicitudes HTTP, y...
// solo estás interesado en el resultado del último evento
