// import { IOrder } from "src/app/order/interface/IOrder.interface";

export interface Ticket {
  id?:             number;
  createdAt?:      string;
  numberOfPeople?: number;
  status? :        string;
}