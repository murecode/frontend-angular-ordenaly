// import { IOrder } from "src/app/order/interface/IOrder.interface";

export interface ITicket {
  ticket_id?:     string;
  created_at?:    string;
  related_order?: number;
}