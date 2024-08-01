import {  Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";

// propiedades que se espera decodificar del payload
interface DecodedToken {
  id: number;
  fullname: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null; 

  constructor() {}

  //se crea la clave en el localStorage
  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  //desde el LoginComponent se asigna el jwt a la clave en localStorage 
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

  getId(): number | null {
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken.id : null;
  }

  getFullname(): string | null {
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken.fullname : null;
  }

  getEmail(): string | null {
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