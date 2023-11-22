
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { OrderCardComponent } from '../../components/order-card/order-card.component';
// import { OrderService } from '../../service/order.service';
// import { IOrder } from '../../interface/IOrder.interface';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ MatTabsModule, NgFor, OrderCardComponent ],
  templateUrl: './list-page.component.html',
})
export class ListPageComponent {
  
  filterTabs: string[] = ['Todo','Pendientes','Completas']

}
