import { computed, inject, Injectable, signal } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom, map, Observable, of, tap } from "rxjs";

import { environment } from "src/environments/environment.prod";
import { AuthStatus, LoginRequest, LoginResponse, User } from "./auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string = environment.baseUrl;
  private http = inject(HttpClient);

  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  private _jwtToken = signal<string | null>(localStorage.getItem('jwtToken'));

  //Lo que se expone al exterior
  public authStauts = computed( () => this._authStatus() );  
  

  constructor() {}

  get jwtToken$() {
    return this._jwtToken;
  }


  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, user);
  }


  login(username: string, password: string): Observable<boolean> {

    const body = { username, password };

    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, body)
      .pipe(

        tap( res => {
          const token = res.jwt;
          localStorage.setItem('jwtToken', token);
          this.jwtToken$.set(token);
          this._authStatus.set( AuthStatus.authenticated );

          console.log(token);

        }),

        map( () => true )
      )
  }

  // logout() {
  //   localStorage.removeItem('jwtToken');
  //   this.jwtToken.set(null);
  //   // Aquí podrías añadir lógica adicional, como redirección a la página de inicio, etc.
  // }

 
  
}