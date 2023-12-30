import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component'; 
import { IProduct } from 'src/app/interfaces/IProduct.inteface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ NgFor, AddButtonComponent, RouterModule ],
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent {

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


