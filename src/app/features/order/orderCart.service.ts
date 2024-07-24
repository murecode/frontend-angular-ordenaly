import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of, tap } from "rxjs";

import {  } from "../order/interfaces/Order.interface"; 
// import { environment } from "src/environments/environment.dev";
import { environment } from "src/environments/environment.prod";
import { AddToOrderRequest } from "./interfaces/OrderCart.interface";

@Injectable({ providedIn: 'root' })
export class OrderCartService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http: HttpClient ) {};


  addProductToOrder(orderId: number, body: AddToOrderRequest): Observable<AddToOrderRequest>{
    return this.http.post<AddToOrderRequest>(`${this.baseUrl}/carts/${orderId}`, body);
  }


}