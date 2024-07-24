import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';

import { OrderService } from '../order.service';
import { OrderDetails } from '../interfaces/OrderDetails.interface';
import { AddToCartComponent } from "../components/add-to-order/add-to-order.component";

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgFor,
    RouterModule,
    AddToCartComponent
],
  templateUrl: 'detail-order.component.html',
})
export class OrderDetailsComponent {

  public orderDetails?: OrderDetails[];

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
      if (!order) return this.router.navigate(['/orders']); // si el id no existe, redirecciona

      this.orderDetails = order; 
      console.log(order)

      return;
    })

  }


}



