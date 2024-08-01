import { computed, inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, of, tap } from "rxjs";

import { environment } from "src/environments/environment.prod";
import { AuthStatus, LoginResponse, User } from "../interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string = environment.baseUrl;
  private http = inject(HttpClient);

  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  private _jwtToken = signal<string | null>(localStorage.getItem('jwtToken'));

  //Lo que se expone al exterior
  public authStatus = computed( () => this._authStatus() );  
  

  constructor() {}


  get jwtToken$() {
    return this._jwtToken;
  }


  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
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

  checkAuthStatus(): Observable<Boolean> {
    if ( !localStorage.getItem('jwtToken') ) return of(false);
    
    const token = localStorage.getItem('token');

    return of(true); 
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('jwtToken') ? true : false;
  }

  logout() {
    this._jwtToken.set(null);
    localStorage.removeItem('jwtToken');
    // Aquí podrías añadir lógica adicional, como redirección a la página de inicio, etc.
  }

 
  
}