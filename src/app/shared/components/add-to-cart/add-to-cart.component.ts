import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { ProductService } from 'src/app/features/product/product.service';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/features/product/Product.inteface';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [
    NgFor,
    FormsModule
  ],
  templateUrl: 'add-to-cart.component.html',
})
export class AddToCartComponent implements OnInit {

  products: Product[] = [];

  selectedProductId: number | null = null;
  quantity: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  submit() {
    const payload = {
      product: this.selectedProductId,
      quantity: this.quantity
    };
    console.log(payload); // Aquí enviarías el payload con HttpClient.post()
  }

}
