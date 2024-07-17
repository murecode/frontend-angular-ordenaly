export interface User {
  fullname: string;
  phone:    string;
  username: string;
  email:    string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  jwt: string;
}

export enum AuthStatus {
  checking = "checking",
  authenticated = "authenticated",
  notAuthenticated = "notAuthenticated",
}


