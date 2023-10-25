
import { Component } from '@angular/core';

import { OrderCardComponent } from 'src/app/shared/components/order-card/order-card.component';
import { FilterTabsComponent } from 'src/app/shared/components/fiterTabs/filter-tabs.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ FilterTabsComponent, OrderCardComponent ],
  templateUrl: './list-page.component.html',
})
export class ListPageComponent  {

}
