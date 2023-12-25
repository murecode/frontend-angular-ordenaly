import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interface/IProduct.inteface';

@Component({
  selector: 'new-product-page',
  standalone: true,
  templateUrl: './new-product-page.component.html',
  imports: [ CommonModule, ReactiveFormsModule ],
  styles: [
  ]
})
export class NewProductComponent {

  public newProductForm: FormGroup = this.productForm.group({
    productName: [''],
    description: [''],
    price: [0.1],
    inStock: [true]
  })

  constructor(
    private productService: ProductService,
    private productForm: FormBuilder
  ) {}

  ngOnInit(): void {

  }

  get currentProduct(): IProduct {
    const product = this.newProductForm.value as IProduct;
    return product;
  }

  onSubmit(): void {

    this.productService.newProduct( this.currentProduct )
      .subscribe( product => console.log("producto enviado"))
     
    }

}
