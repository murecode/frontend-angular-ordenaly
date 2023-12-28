import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interface/IProduct.inteface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'new-product-page',
  standalone: true,
  templateUrl: './new-product-page.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styles: [
  ]
})
export class NewProductComponent implements OnInit {

  product?: IProduct;

  public newProductForm: FormGroup = this.productForm.group({
    product_name: [''],
    description: [''],
    price: [0.1],
    in_stock: [true]
  })

  constructor(
    private productService:ProductService,
    private productForm:FormBuilder,
    private activeRoute:ActivatedRoute,
    private router:Router
  ) {}

  get currentProduct():IProduct {
    const product = this.newProductForm.value as IProduct;
    return product;
  }
  
  ngOnInit():void {

    if ( this.router.url.includes('edit') ) return;

    this.activeRoute.params
      .pipe(
        switchMap( ({ id }) => this.productService.getProduct( id ) ),
      ).subscribe( product => {

        if ( !product ) return this.router.navigateByUrl('/');

        this.newProductForm.reset( product )
        return;
      });

  }

  onSubmit():void {

    if (this.newProductForm.invalid) return;

    // Si no tiene id se crea un nuevo recurso
    if (!this.currentProduct.product_id) {
      this.productService.newProduct( this.currentProduct )
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
      })

  }

}
