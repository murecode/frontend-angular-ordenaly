import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from 'src/app/shared/components/order-card/order-card.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CommonModule, OrderCardComponent],
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {

}
