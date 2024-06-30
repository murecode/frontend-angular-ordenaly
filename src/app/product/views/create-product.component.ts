import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';

import { ProductService } from '../product.service'; 
import { Product } from '../Product.inteface'; 

@Component({
  selector: 'new-product-page',
  standalone: true,
  templateUrl: './create-product.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styles: []
})
export class NewProductComponent implements OnInit {

  product?: Product;

  public productForm: FormGroup = this.formBuilder.group({
    // product_id: [''],
    product_name: [''],
    // url_image: [''],
    description: [''],
    price: [0.1],
    in_stock: [true]
  })

  constructor(
    private productService:ProductService,
    private formBuilder:FormBuilder,
    private activeRoute:ActivatedRoute,
    private router:Router
  ) {}

  get currentProduct():Product {
    const product = this.productForm.value as Product;
    return product;
  }
  
  ngOnInit():void {

    // if ( this.router.url.includes('edit') ) return;

    // this.activeRoute.params
    //   .pipe(
    //     switchMap( ({ id }) => this.productService.getProduct( id ) ),
    //   ).subscribe( product => {

    //     if ( !product ) return this.router.navigateByUrl('/');

    //     this.productForm.reset( product )
    //     return product.product_id;
    //   });

  }

  onSubmit():void {

    if (this.productForm.invalid) return;

    // Si tiene id se actualiza el recurso por su id
    if ( this.currentProduct.product_id ) {
      this.productService.updateProduct( this.currentProduct )
      .subscribe( product => {
        //TODO: mostrar snackbar
        console.log("Producto actualizado" );
      });
      return;
    }
    
    // Si no tiene id se crea un nuevo recurso
    this.productService.newProduct(this.currentProduct)
      .subscribe( product => {
        //TODO: mostrar snackbar, y navegar a /product/edit/id
        console.log("Producto Creado");
      });

    console.log({
      // formIsValid: this.productForm.valid,
      value: this.productForm.value,
    }) 
     
  }

}
