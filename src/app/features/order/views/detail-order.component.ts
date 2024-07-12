import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { OrderService } from '../order.service';
import { OrderDetails } from '../OrderDetails.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgFor
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



