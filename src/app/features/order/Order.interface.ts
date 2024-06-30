import { Item } from "./Item.interface";

export interface Order {
  order_id?:       string;
  related_ticket?: number;
  table?:          string;
  waiter?:         string;
  order_status?:   string;
  payment_status?: string;
  item_list:       Item[];
  order_comment?:  string;
}

// export interface ItemList {
//   item_id?:      string;
//   product_name?: string;
//   price?:        number;
//   quantity?:     number;
// }