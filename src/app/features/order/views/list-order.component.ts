import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { Order } from '../Order.interface'; 
import { OrderService } from '../order.service'; 

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterModule,
    MatButtonToggleModule,
  ],
  templateUrl: './list-order.component.html',
})
export class OrderListComponent {

  public orderList: Order[] = [];
  
  paymentStatus = [
    {"label": 'Pendiente',  "status": 'PENDING'},
    {"label": 'Pagadas',    "status": 'PAID'},
  ];


  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void { 

    // Carga todas las órdenes por defecto al inicio
    this.loadAllOrders();

    // this.activatedRoute.params.subscribe(params => {
    //   const status = params['status'];
    //   if (status) {
    //     this.loadOrdersByPayment(status);
    //   } else {
    //     this.loadAllOrders();
    //   }
    // });
    
  }

  loadAllOrders() {
    this.orderService.getOrders()
      .subscribe(
        order => this.orderList = order
      );
  }

  loadOrdersByPayment(status:string) {
    this.orderService.getOrdersByPayment(status)
      .subscribe(
        order => this.orderList = order
      );
      console.log(this.orderList);
      
  }

  // onTabClick(status: string) {
  //   this.router.navigate(['app/orders/status', status]);
  // }
      




}
