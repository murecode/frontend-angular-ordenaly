import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Product } from "./Product.inteface"; 
// import { environment } from "src/environments/environment.dev";
import { environment } from "src/environments/environment.prod";

@Injectable({providedIn: 'root'})
export class ProductService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http: HttpClient ) {};

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProduct(id:string):Observable<Product|undefined> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  newProduct(product:Product):Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  updateProduct( product:Product ):Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/products/${product.product_id}`, product);
  }

}