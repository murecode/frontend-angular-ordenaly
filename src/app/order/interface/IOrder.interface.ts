// Generated by https://quicktype.io

import { IProduct } from "src/app/product/interface/IProduct.inteface";
import { ITicket } from "src/app/ticket/interface/ITicket.interface";

export interface IOrder {
  ordenId:     number;
  turno:       ITicket;
  mesa:        number;
  mesero:      string;
  estado:      string;
  pago:        string;
  pedido:      IItem[];
  notas:       string;
}

export interface IItem {
  itemId:   number;
  producto: IProduct;
  cantidad: number;
}
