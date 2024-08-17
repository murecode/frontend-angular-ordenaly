import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";

import {  } from "../interfaces/Order.interface"; 
import { environment } from "src/environments/environment.dev";
import { AddItem } from "../interfaces/AddItem.interface";
import { OrderDetails } from "../interfaces/OrderDetails.interface";

@Injectable({ providedIn: 'root' })
export class OrderCartService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http: HttpClient ) {};


  getOrderDetails(id: number): Observable<OrderDetails[] | undefined> {
    return this.http.get<OrderDetails[]>(`${this.baseUrl}/items/orders/${id}`)
    .pipe(
      catchError(() => of(undefined))
    )
  }

  addItemToOrder(orderId: number, body: AddItem): Observable<AddItem>{
    return this.http.post<AddItem>(`${this.baseUrl}/items/orders/${orderId}`, body);
  }

  deleteItemFromOrder(itemId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/items/${itemId}`);
  }


}