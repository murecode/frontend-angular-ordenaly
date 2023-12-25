import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of } from "rxjs";

import { IOrder } from "../interface/IOrder.interface";
// import { environment } from "src/environments/environment.dev";
import { environment } from "src/environments/environment.prod";

@Injectable({ providedIn: 'root' })
export class OrderService {

  private baseUrl:string = environment.baseUrl;

  constructor( private http: HttpClient ) {};


  getOrders():Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders`)
  }

  getOrderById( ordenId:string ):Observable<IOrder|undefined> {
    return this.http.get<IOrder>(`${ this.baseUrl }/orders/${ ordenId }`)
      .pipe(
        catchError(() => of(undefined))
      );
  }

  newOrder( order:IOrder ):Observable<IOrder> {
    return this.http.post<IOrder>(`${this.baseUrl}/orders`, order);
  }

  updateOrder( order:IOrder ):Observable<IOrder> {
    if( !order.order_id ) throw Error("La orden es requerida"); 
    return this.http.patch<IOrder>(`${this.baseUrl}/orders/${ order.order_id }`, order)
  }

  removeOrder( id:string ): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/orders/${ id }`)
      .pipe(
        catchError( err => of(false) ),
        map( resp => true)
      )
  }


}