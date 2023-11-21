import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of } from "rxjs";

import { IOrder } from "../interface/IOrder.interface";
import { environment } from "src/environments/environment.dev";

@Injectable({ providedIn: 'root' })
export class OrderService {

  private baseUrl: string = environment.baseUrl;
  private ordenalyURL: string = 'http://localhost:8080/orders/list'

  constructor( private http: HttpClient ) {};


  newOrder( order: IOrder ): Observable<IOrder> {
    return this.http.post<IOrder>(`${this.baseUrl}/orders`, order);
  }

  getOrders():Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.ordenalyURL}`)
  }

  getOrderById( id: string ): Observable<IOrder|undefined> {
    return this.http.get<IOrder>(`${ this.baseUrl }/orders/${ id }`)
      .pipe(
        catchError( () => of(undefined))
      );
  }

  updateOrder( order: IOrder ): Observable<IOrder> {
    if( !order.id ) throw Error("La orden es requerida"); 
    return this.http.patch<IOrder>(`${this.baseUrl}/orders/${ order.id }`, order)
  }

  removeOrder( id: string ): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/orders/${ id }`)
      .pipe(
        catchError( err => of(false) ),
        map( resp => true)
      )
  }


}