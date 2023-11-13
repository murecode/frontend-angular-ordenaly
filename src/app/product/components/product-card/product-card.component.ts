import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

// import { IProduct } from '../../interface/IProduct.inteface';
// import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent {

  // constructor(private productService: ProductService) {};

}
