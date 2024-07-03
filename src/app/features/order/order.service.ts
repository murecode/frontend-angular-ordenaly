import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of } from "rxjs";

import { Order, OrderData } from "./Order.interface"; 
// import { environment } from "src/environments/environment.dev";
import { environment } from "src/environments/environment.prod";

@Injectable({ providedIn: 'root' })
export class OrderService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http: HttpClient ) {};

  getOrders() {
    return this.http.get<OrderData>(`${this.baseUrl}/orders`)
    .pipe(
      map(res => res.content)
    )
  }

  getOrderById( ordenId:string ):Observable<Order|undefined> {
    return this.http.get<Order>(`${ this.baseUrl }/orders/${ ordenId }`)
      .pipe(
        catchError(() => of(undefined))
      );
  }

  newOrder( order:Order ):Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/orders`, order);
  }

  // updateOrder( order:Order ):Observable<Order> {
  //   if( !order.order ) throw Error("La orden es requerida"); 
  //   return this.http.patch<Order>(`${this.baseUrl}/orders/${ order.order }`, order)
  // }

  // removeOrder( id:string ): Observable<boolean> {
  //   return this.http.delete(`${this.baseUrl}/orders/${ id }`)
  //     .pipe(
  //       catchError( err => of(false) ),
  //       map( resp => true)
  //     )
  // }


}