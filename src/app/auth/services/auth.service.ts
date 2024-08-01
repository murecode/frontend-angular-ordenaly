import { computed, inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, of, tap } from "rxjs";

import { jwtDecode } from "jwt-decode";

import { environment } from "src/environments/environment.prod";
import { AuthStatus, LoginResponse, User } from "../interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl:string = environment.baseUrl;
  private http = inject(HttpClient);

  private token: string | null = null; //

  private _authStatus = signal<AuthStatus>(AuthStatus.checking);
  private _jwtToken = signal<string | null>(localStorage.getItem('jwtToken'));

  //Lo que se expone al exterior
  public authStatus = computed( () => this._authStatus() );  
  
  constructor() {}

  getToken(): string | null { //
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  setToken(token: string) { //
    this.token = token;
    localStorage.setItem('token', token);
  }

  decodeToken(): any { //
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  getUserName(): string | null { //
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken.nombre : null;
  }





  get jwtToken$() {
    return this._jwtToken;
  }


  // register(user: User): Observable<User> {
  //   return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  // }


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

  isLoggedIn(): boolean {
    return localStorage.getItem('jwtToken') ? true : false;
  }

  logout() {
    this._jwtToken.set(null);
    localStorage.removeItem('jwtToken');
    // Aquí podrías añadir lógica adicional, como redirección a la página de inicio, etc.
  }

 
  
}