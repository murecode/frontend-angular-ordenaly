import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IOrder } from "../interfaces/IOrder.interface";
import { environment } from "src/environments/environment.dev";

@Injectable({ providedIn: 'root' })
export class OrderService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { };

  displayMsg(){
    return "Run OrderService!"
  }

  getOrders():Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders`)
  }

}