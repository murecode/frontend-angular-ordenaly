import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interface/IProduct.inteface';

@Component({
  selector: 'new-product-page',
  standalone: true,
  templateUrl: './new-product-page.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styles: [
  ]
})
export class NewProductComponent {

  public product?: IProduct;

  public newProductForm: FormGroup = this.productForm.group({
    product_id: [''],
    product_name: ['', Validators.required],
    description: [''],
    price: [0.1, Validators.required],
    in_stock: [true]
  })

  constructor(
    private productService: ProductService,
    private productForm: FormBuilder
  ) { }

  get currentProduct(): IProduct {
    const product = this.newProductForm.value as IProduct;
    return product;
  }

  onSubmit(): void {

    if (this.newProductForm.invalid) return;

    // Si no tiene id se crea un nuevo recurso
    if (!this.currentProduct.product_id) {
      this.productService.newProduct(this.currentProduct)
        .subscribe(product => {
          console.log("producto enviado");
        })
      return;
    }

    // Si tiene id se actualiza el recurso por su id
    this.productService.updateProduct( this.currentProduct )
      .subscribe(product => {
        //TODO: mostrar snackbar, y navegar a /product/edit/id
        console.log("producto actualizado");
      } )
  }

}
