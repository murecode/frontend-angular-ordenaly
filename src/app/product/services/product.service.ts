import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IProduct } from "../interface/IProduct.inteface";
import { environment } from "src/environments/environment.dev";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService {

  private baseUrl: string = environment.baseUrl;
  // private ordenaly: string = 'http://localhost:8080/products/list'

  constructor( private http: HttpClient ) {};

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}/products`);
  }

}