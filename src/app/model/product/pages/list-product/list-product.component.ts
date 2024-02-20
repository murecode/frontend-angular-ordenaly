import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component'; 
import { IProduct } from '../../IProduct.inteface';
import { ProductService } from '../../product.service';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ NgFor, AddButtonComponent, RouterModule, NavbarComponent ],
  templateUrl: './list-product-page.html',
  styles: [
  ]
})
export class ListProductComponent {

  public productList: IProduct[] = []
   
  constructor(private productService: ProductService) {};

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( product => this.productList = product )
  }

}


