import { computed, inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, of, tap } from "rxjs";

import { jwtDecode } from "jwt-decode";

import { environment } from "src/environments/environment.prod";
import { AuthStatus, LoginResponse, User } from "../interfaces/auth.interface";


interface DecodedToken {
  fullname: string;
  email: string;
  // Agrega aquí otras propiedades que esperas en el payload
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null; 

  constructor() {}

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  setToken(jwt: string) {
    this.token = jwt;
    localStorage.setItem('token', jwt);
  }

  //Se decodifica el JWT para extraer datos necesarios
  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode<DecodedToken>(token);
    }
    return null;
  }

  getUserName(): string | null {
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken.fullname : null;
  }

  getUserEmail(): string | null {
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken.email : null
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

 
  
}