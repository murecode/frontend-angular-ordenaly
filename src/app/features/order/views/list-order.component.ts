import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';


import { Order } from '../interfaces/Order.interface'; 
import { OrderService } from '../services/order.service'; 
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterModule,

    ModalComponent
  ],
  templateUrl: './list-order.component.html',
})
export class OrderListComponent {

  public orderList: Order[] = [];

  constructor(
    private orderService: OrderService,
    
  ) {}

  ngOnInit(): void { 
    this.loadAllOrders(); 
  }

  selectOption(event: Event) {
    const elem = event.target as HTMLSelectElement;
    const val = elem.value;

    if (val == 'ALL') {
      this.loadAllOrders();
    } else {
      this.loadOrdersByPayment(val)
    }
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
  }

  // onTabClick(status: string) {
  //   this.router.navigate(['app/orders/status', status]);
  // }
      




}
