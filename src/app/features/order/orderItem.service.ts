import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of, tap } from "rxjs";

import {  } from "./interfaces/Order.interface"; 
// import { environment } from "src/environments/environment.dev";
import { environment } from "src/environments/environment.prod";
import { AddToOrderRequest } from "./interfaces/OrderCart.interface";
import { OrderDetails } from "./interfaces/OrderDetails.interface";

@Injectable({ providedIn: 'root' })
export class OrderCartService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http: HttpClient ) {};


  getOrderDetails(id: number): Observable<OrderDetails[] | undefined> {
    return this.http.get<OrderDetails[]>(`${this.baseUrl}/carts/orders/${id}`)
    .pipe(
      catchError(() => of(undefined))
    )
  }

  addItemToOrder(orderId: number, body: AddToOrderRequest): Observable<AddToOrderRequest>{
    return this.http.post<AddToOrderRequest>(`${this.baseUrl}/carts/${orderId}`, body);
  }

  deleteItemFromOrder(itemId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/carts/product/${itemId}`);
  }


}