import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, of } from "rxjs";

import { IOrder } from "../interface/IOrder.interface";
import { environment } from "src/environments/environment.dev";

@Injectable({ providedIn: 'root' })
export class OrderService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { };

  displayMsg(){
    return "Run OrderService!"
  }

  newOrder( order: IOrder ): Observable<IOrder> {
    return this.http.post<IOrder>(`${this.baseUrl}/order/`, order);
  }

  updateOrder( order: IOrder ): Observable<IOrder> {
    if( !order.id ) throw Error("La orden es requerida"); 
    return this.http.patch<IOrder>(`${this.baseUrl}/order/${ order.id }`, order)
  }

  removeOrderById( order: IOrder ): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/order/${ order.id }`)
      .pipe(
        catchError( err => of(false) ),
        map( resp => true)
      )
  }

  getOrders():Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/order`)
  }

}