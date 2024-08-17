import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from "src/environments/environment.dev";
import { Ticket, TicketData, TicketRequest } from "./Ticket.interface"; 

@Injectable({providedIn: 'root'})
export class TicketService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) {}

  getTickets() {
    return this.http.get<TicketData>(`${this.baseUrl}/tickets`)
    .pipe(
      map(res => res.content)
    )
  }

  getTicketsByStatus(status: string) {
    return this.http.get<TicketData>(`${this.baseUrl}/tickets/status/${status}`)
    .pipe(
      map(res => res.content)
    )
  }

  newTicket(data: TicketRequest): Observable<any> {
    return this.http.post<Ticket>(`${this.baseUrl}/tickets`, data )
  }


}