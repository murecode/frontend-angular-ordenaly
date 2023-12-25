import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IProduct } from '../../interface/IProduct.inteface';
import { ProductService } from '../../services/product.service';
import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule, AddButtonComponent],
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent {

  public productList: IProduct[] = []
   
  constructor(private productService: ProductService) {};

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( product => this.productList = product )
  }

  addProduct() {
    console.log("Enviar a formulario de nuevo producto")
  }

}
