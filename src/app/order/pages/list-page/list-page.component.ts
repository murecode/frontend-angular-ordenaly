
import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { NgFor } from '@angular/common';

import { OrderCardComponent } from 'src/app/shared/components/order-card/order-card.component';
// import { FilterTabsComponent } from 'src/app/shared/components/fiterTabs/filter-tabs.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ OrderCardComponent, MatTabsModule, NgFor],
  templateUrl: './list-page.component.html',
})
export class ListPageComponent  {

  filterTabs: string[] = ['Todo','Pendientes','Completas']

}
