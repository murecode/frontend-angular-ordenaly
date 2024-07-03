import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component'; 
import { Product } from '../Product.inteface';
import { ProductService } from '../product.service';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { NewProductComponent } from './create-product.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ NgFor, NgIf, AddButtonComponent, RouterModule, NavbarComponent, NewProductComponent ],
  templateUrl: 'list-products.component.html',
  styles: [
  ]
})
export class ListProductComponent {

  public productList: Product[] = []
   
  constructor(
    private productService: ProductService
  ) {};

  ngOnInit(): void {

    this.productService.getProducts()
      .subscribe(
        product => this.productList = product
        )

  }

  openModal() {
    console.log("Activo");
  }

}


