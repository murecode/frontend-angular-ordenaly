import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// import { environment } from "src/environments/environment.dev";
import { environment } from "src/environments/environment.prod";
import { Ticket } from "./Ticket.interface"; 

@Injectable({providedIn: 'root'})
export class TicketService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) {}

  getTickets():Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets`)
  }

  getTicket( id:string ):Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/tickets/${id}`)
  }

  newTicket():Observable<any> {
    return this.http.post<Ticket>(`${this.baseUrl}/tickets`, undefined )
  }


}