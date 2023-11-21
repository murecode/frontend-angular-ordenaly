import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ ProductCardComponent ],
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {

}


