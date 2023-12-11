import { IOrder } from "src/app/order/interface/IOrder.interface";

export interface ITicket {
  id:    number;
  hora:  string;
  orden: IOrder;
}