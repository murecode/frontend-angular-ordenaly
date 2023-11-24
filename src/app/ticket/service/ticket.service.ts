import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment.dev";
import { ITicket } from "../interface/ITicket.interface";

@Injectable({providedIn: 'root'})
export class TicketService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) {}

  createTicket() { }

  getTickets(): Observable<ITicket[]> {
    return this.http.get<ITicket[]>(`${this.baseUrl}/tickets`)
  }

}