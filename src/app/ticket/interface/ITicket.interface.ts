import { IOrder } from "src/app/order/interface/IOrder.interface";

export interface ITicket {
  ticketId:    number;
  hora:        string;
  orden:       IOrder;
}