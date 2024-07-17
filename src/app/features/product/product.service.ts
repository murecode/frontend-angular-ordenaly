import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { Product, ProductData } from "./Product.inteface"; 
// import { environment } from "src/environments/environment.dev";
import { environment } from "src/environments/environment.prod";

@Injectable({providedIn: 'root'})
export class ProductService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http: HttpClient ) {};

  getProducts() {
    return this.http.get<ProductData>(`${this.baseUrl}/products`)
    .pipe(
      map( res => res.content )
    )
  }

  newProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  updateProduct( product:Product ):Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/products/${product.id}`, product);
  }

}