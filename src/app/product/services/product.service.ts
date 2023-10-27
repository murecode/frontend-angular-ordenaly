import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IProduct } from "../interface/IProduct.inteface";
import { environment } from "src/environments/environment.dev";

@Injectable({providedIn: 'root'})
export class ProductService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) {};

}