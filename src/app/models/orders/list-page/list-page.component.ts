import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from 'src/app/shared/components/order-card/order-card.component';
import { FilterTabsComponent } from 'src/app/shared/components/fiterTabs/filter-tabs.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CommonModule, OrderCardComponent, FilterTabsComponent],
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {

}
