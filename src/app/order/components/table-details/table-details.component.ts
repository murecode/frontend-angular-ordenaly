import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { IOrder } from '../../interface/IOrder.interface';
import { OrderService } from '../../service/order.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
        if( !order ) return this.router.navigate(['/orders/list'])
        this.order = order;
        console.log({order})
        return;
      }
    );
  }

}

//* ActiveRoute, proporciona acceso a información sobre una ruta asociada...
// con un componente que se carga en un *outlet*. Se utiliza para recorrer...
//  el árbol de RouterState y extraer información de los nodos.

//** switcMap, 
