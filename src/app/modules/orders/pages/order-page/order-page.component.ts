import { Component } from '@angular/core';
import { FilterTabsComponent } from 'src/app/shared/components/fiterTabs/filter-tabs.component';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [ FilterTabsComponent ],
  templateUrl: './order-page.component.html',
})
export class OrderPageComponent {

}
