import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';


import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interface/IProduct.inteface';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ CommonModule, NgFor],
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {

  public productList: IProduct[] = [];

  constructor( private productService: ProductService ) {};

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(  product => this.productList = product )
  }

}
